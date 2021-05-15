import {useState} from 'react'
import {useEffect} from 'react'

function PhotoGalleryDisplay () {
   const [photoGalleryShow, setPhotoGalleryShow]= useState([])
   

    useEffect(() => {
        getphotoGalleryShow()
    }, [])
    const getphotoGalleryShow = () => {
        fetch('http://localhost:8080/displayPhotos')
            .then(response => response.json())
            .then(result => {
                console.log("photoGalleryResult",result)
                setPhotoGalleryShow(result)
                })
                
                
            }
    
    const photoItems = photoGalleryShow.map((photos) => {
        return (
            <div >
                <div key = {photos._id}>
                    <p class="galleryFlexBox"> 
                        <img src={photos.image}/>
                        <label>{photos.username}</label>
                    </p>
                </div>
               
            </div>
                
            
        )})

    return(
        <div>
            <h1>TheTinyHomeNeighbor</h1>
            {photoItems}
        </div>
    )
}

export default PhotoGalleryDisplay