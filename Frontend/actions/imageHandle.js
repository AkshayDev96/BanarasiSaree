import Axios from 'axios'

export const onDrop = (acceptedFile, rejectedFiles) => {
    if (!acceptedFile) {
        return;
    }

   if(acceptedFile.type.match('image/webp') || acceptedFile.type.match('image/jpeg') || acceptedFile.type.match('image/png')){
    const CancelToken = Axios.CancelToken;
    let source = CancelToken.source();
   
    source && source.cancel('Operation canceled due to new request.');
   
    // save the new request for cancellation
    source = Axios.CancelToken.source();
 
    const config = {
        onUploadProgress: progressEvent =>Math.round((progressEvent.loaded * 100) / progressEvent.total),
        cancelToken: source.token,
    };
    
   
    Axios.get("https://shopapi321.herokuapp.com/auth").then(res=>{
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
        Axios.post('https://upload.imagekit.io/api/v1/files/upload', data, config).then(
                        function(res) {
                          if(res.data.fileId && res.data.url){
                            console.log(res.data)
                          }
                          // eslint-disable-next-line
                        }.bind(this)
                    ).catch(
                        function() {
                            console.log("error")
                          // eslint-disable-next-line
                        }.bind(this)
                    );
            };
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.readAsDataURL(acceptedFile);
      }
    }).catch((e)=>{
        console.log(e)
    });
  }
}
