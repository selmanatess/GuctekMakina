import React from 'react'
import '../styles/mark.css'
import { HiChevronDoubleRight } from 'react-icons/hi'
const Mark = () => {
const imageUrl=[
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2FIMG-20240329-WA0001.jpg?alt=media&token=9331d716-c104-42bd-a1d8-07c9731ee474',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2FIMG-20240329-WA0010.jpg?alt=media&token=9f78e352-6f70-493f-987e-c282b9503dbf',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2FIMG-20240329-WA0011.jpg?alt=media&token=70d44110-948e-412d-b412-012bdf73da41',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2FIMG-20240329-WA0016.jpg?alt=media&token=89e0c726-26b4-401f-be8a-f1cf1bcd4cfa',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2FIMG-20240329-WA0021.jpg?alt=media&token=2c85fa23-93b6-483b-afd9-dde991985d8e',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2FIMG-20240329-WA0022.jpg?alt=media&token=a13e1ad8-46f6-4d22-8aad-d764efa73c0a',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2FKobelco_logo.svg.png?alt=media&token=e9c4bf3f-1654-445d-859d-63529bd17424',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2FLiebherr-Logo.png?alt=media&token=274d986c-7c69-4329-b8db-a0f81c9f4f0a',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2FSumitomo-logo.jpg?alt=media&token=4e54ee74-aec7-48d9-959d-205fa488dfb9',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2Fcat1868.jpg?alt=media&token=d5e58b72-70b9-40e2-8fd4-eae046404277',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2Fkomatsu-limited3122.jpg?alt=media&token=df47c2d2-2b29-45ea-84a3-cc3d0e7c9689',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2Funnamed.png?alt=media&token=070e2c40-4d72-4a1d-8b26-d15b5200d458',
    'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/marks%2Fvolvo-logo-C0F7715FCB-seeklogo.com.png?alt=media&token=3667da3e-959d-4234-876e-3a9d818fd601'


]
    return (
        <div className='mark'>
            <div className='mark-icon'> 
            <span>
                <HiChevronDoubleRight style={{ width: '50px', height: '50px' }}></HiChevronDoubleRight> 
            <span>Hizmet Verilen Markalar</span></span></div>
            <div className='mark-container'>
           {
                imageUrl.map((url,index)=>(
                     <div key={index} className='mark-card' style={{backgroundImage:`url(${url})`}}></div>
                ))
           }
            </div>
            </div>

    )
}

export default Mark
