import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
}

const Post = (props: PropsType) => {
    return (
        <div className={s.content}>
            <div>
                <div className={s.ava}>
                    <img
                        src='https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'/>
                    {props.message}
                    <div className={s.like}>
                        <img src='https://banner2.cleanpng.com/20181001/rhs/kisspng-like-button-social-media-image-facebook-messenger-health-insurance-life-insurance-and-medicare-plan-5bb209e2eacd98.4287911215383945949618.jpg' /> 777
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;

