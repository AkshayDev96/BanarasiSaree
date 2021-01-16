import React from 'react'


const ImageView=(props)=>{
    const {data} = props;
    
    const thumb = {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
        padding: 4,
        boxSizing: 'border-box'
      };
      
      const thumbInner = {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
      };
      
      const img = {
        display: 'block',
        width: '100%',
        height: '100%'
      };

    return (
        <div>
            {data && (
                <>
                <div style={thumb}>
                <div style={thumbInner}>
                <img src={data.thumbnailUrl?data.thumbnailUrl:data} style={img} alt=""/>
                </div>
                </div>
                </>
            )}
        </div>
    )
}

export default ImageView
