import React from 'react'
import Axios from 'axios'
import ImageView from '../ImageView'
import {API,IMGKIT} from '../../config'
import router from 'next/router'
import {GetCategories} from '../../actions/category'
import {MakeSubcategory} from '../../actions/subcategory'

const CreateSubCategory = () => {
    const [name,setName] = React.useState('')
    const [image,setImage] = React.useState('')
    const [progress,setProgress] = React.useState('')
    const [categories,setCategories] = React.useState([])
    const [category,setCategory] = React.useState('')

    React.useEffect(()=>{
        GetCategories().then((res)=>{
            if(res.data.success && res.data.categories){
                setCategories(res.data.categories)
            }else{
                setCategories([])
            }
        }).catch((e)=>{setCategories([]);alert(e)})
    },[])

   const onDrop = (acceptedFile, rejectedFiles) => {
    if (!acceptedFile) {
        return;
    }
    setImage('')
    setProgress('')
    if(acceptedFile.type.match('image/webp') || acceptedFile.type.match('image/jpeg') || acceptedFile.type.match('image/png')){
        const CancelToken = Axios.CancelToken;
        let source = CancelToken.source();
        source && source.cancel('Operation canceled due to new request.');
        // save the new request for cancellation
        source = Axios.CancelToken.source();
        const config = {
            onUploadProgress: progressEvent =>setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total)),
            cancelToken: source.token,
        };

        Axios.get(`${API}/image_auth`).then(res=>{
        if(res.statusText==="OK"){
            let expire = res.data.expire;
            let token = res.data.token;
            let signature = res.data.signature;
            const reader = new FileReader();
            reader.onload = event => {
            const data = new FormData();
            data.append('file', event.target.result.substring(event.target.result.indexOf(',') + 1));
            data.append('fileName', acceptedFile.name);
            data.append('publicKey', "public_/v27ckk/qAas7cG04d3iaVr/U5g=");
            data.append('signature', signature);
            data.append('token', token);
            data.append('expire', expire);
            data.append('useUniqueFilename', true);
            data.append('folder','Demo');
            Axios.post(IMGKIT, data, config).then(
                            function(res) {
                            if(res.data.fileId && res.data.url){
                                setImage(res.data)
                                setProgress('')
                            }
                            // eslint-disable-next-line
                            }.bind(this)
                        ).catch(
                            function() {
                                setImage('')
                                setProgress('')
                            // eslint-disable-next-line
                            }.bind(this)
                        );
                };
                reader.onabort = () => console.log('file reading was aborted');
                reader.onerror = () => console.log('file reading has failed');
                reader.readAsDataURL(acceptedFile);
        }
        }).catch(()=>{
            setImage('')
            setProgress('')
        });
    }
    }

    const uploadImage=(e)=>{
        const file = e.target.files[0]
        if(file){
            onDrop(file)
        }
    }

    const validCheck =()=>((image!==undefined && image!=='') 
    && (category!==undefined && category!=='') && (name!==undefined && name.trim()!==''))

    const submit=(e)=>{
        e.preventDefault()
        if(validCheck()){
            const request = {
                name,
                image:image.url
            }
            MakeSubcategory(category,request).then((res)=>{
                if(res.data.success && res.data.message){
                    alert(res.data.message)
                    router.replace('/admin/subcategory/view')
                }else if(res.data.error){
                    alert(res.data.error)
                }
            }).catch(()=>alert('Somthing went wrong'))
        }
    }

    return (
       <div className="container">
            <div className="row">
                    <div className="col-lg-12">
                    <h3>Create subcategory</h3>
                        <div className="col-md-8">
                        <form onSubmit={submit}>
                        <div className="form-group">
                            <select onChange={(e)=>setCategory(e.target.value)} className="form-select form-select-md form-control" defaultValue="" aria-label=".form-select-sm example">
                                <option value="">Choose a category</option>
                                {categories.length>0?categories.map((c,i)=>(
                                    <option value={c._id} key={i}>{c.name}</option>
                                )):null
                                }
                            </select>
                         </div>
                        <div className="form-group">
                                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter category name...." className="form-control"/>
                         </div>
                         <div className="form-group">
                                <input type="file" onChange={uploadImage} />
                         </div>
                         {progress?(
                            <div className="form-group">{progress}%</div>
                         ):null}
                         {image?(
                            <div className="form-group">
                                <ImageView data={image}/>
                              </div>
                         ):null}
                         <button type="submit" disabled={!validCheck()} className="btn btn-primary">Create</button>
                        </form>
                        </div>
                    </div>
            </div>
       </div>
    )
}

export default CreateSubCategory