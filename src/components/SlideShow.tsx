import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import '../styles/SlideShow.css'
import BackgroundImageLoader from './BackgroundImageLoader'

function SlideShow() {




    const slides = [
        {
            id: 1,
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/img%2Fbody1.png?alt=media&token=10a1d6e2-21b6-4886-9663-7c60b4b0103c',
            caption: 'Slide 1 Caption',
        },
        {
            id: 2,
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/img%2Fbody2.jpg?alt=media&token=5de39dcc-1c83-4055-9d4a-c1598a4e3083',
            caption: 'Slide 2 Caption',
        },
        {
            id: 3,
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/img%2Fbody3.jpg?alt=media&token=2d5b8be0-fded-4b8d-a265-77f910729fc7',
            caption: 'Slide 3 Caption',
        },
        {
            id: 4,
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/img%2Fbody4.jpg?alt=media&token=5361b0ca-71bc-436b-b251-2db888eacad5',
            caption: 'Slide 4 Caption',
        },
        {
            id: 5,
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/img%2Fbody5.jpg?alt=media&token=8d23fa19-44e9-4871-b78e-1a24ea547878',
            caption: 'Slide 4 Caption',
        }
    ];


    
    return (

        <div className='slide-div'>
            <div className='slide-div-container'>

                <Slide duration={3000}>
                    <BackgroundImageLoader imageUrl={slides[0].imgUrl} text='Merhaba Nasılsın?' />
                    <BackgroundImageLoader imageUrl={slides[1].imgUrl} text='Merhaba Nasılsın?' />
                    <BackgroundImageLoader imageUrl={slides[2].imgUrl} text='Merhaba Nasılsın?' />
                    <BackgroundImageLoader imageUrl={slides[3].imgUrl} text='Merhaba Nasılsın?' />
                    <BackgroundImageLoader imageUrl={slides[4].imgUrl} text='Merhaba Nasılsın?' />

                </Slide>
            </div>
        </div>

    )
}

export default SlideShow