import { storage } from '../../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import './form.scss';
import { useState } from 'react';
import { iconImageUpload } from '../../assets/svg/svg';
import { ReactSVG } from 'react-svg'

const UIFileUpload = (props)=> {

    const [loading, setLoading ] = useState(false);
    const [showPreview, setShowPreview] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)
    const setData = async (event)=> {

        let file = event.target.files[0];
        let meta = event.target.files[0].type;

        if(!file) return;

        try{
            setLoading(true)
            const nameRef = +Math.floor(Date.now() * Math.random());
            const storageRef = ref(storage, `/userimages/img-${nameRef}`);
            const metadata = {
                contentType: meta,
            };

            const uploadTask = await uploadBytes(storageRef, file, metadata);
            getDownloadURL(storageRef).then((url)=> {
                setImageUrl(url)
                props.getData(url)
            })
            setShowPreview(true);
            setTimeout(()=> {
                setLoading(false);
            },500);
            
        }catch{
            e=> console.log(e)
            setShowPreview(false);
        }

    }   

    return (
        <div className="field_ attachment_">
            {
                props.title && 
                <label>{props.title}</label>
            }
            
            <div className='placeholder_' data-loading={loading}>
                { !showPreview && 
                    <div className='upload_icon'>
                        <ReactSVG src={iconImageUpload} />
                        <input type="file" onChange={setData}/>
                    </div>
                }
                {showPreview && 
                    <picture>
                        <source srcSet={imageUrl} />
                        <img src={imageUrl} loading="lazy" />
                    </picture>
                }
            </div>
        </div>
    )
}

export default UIFileUpload;