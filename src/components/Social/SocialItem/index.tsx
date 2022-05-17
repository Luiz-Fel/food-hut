import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
import like from '../../../../public/heart.svg'
import comment from '../../../../public/comment.svg'
import bookmark from '../../../../public/bookmark.svg'

interface socialItemProps {
        profileImg: StaticImageData,
        imageSrc: StaticImageData,
        profileName: string,
        text: string,
        username: string,
        likes: string,
        comments: string
}

export default function socialItem({ profileImg, imageSrc, profileName, text, username, likes, comments } : socialItemProps) {
  return (
    <div className={styles.container}>
        <div className={styles.profileHeader}>
            <Image src={profileImg} width={40} height={40} />
            <div className={styles.userInfo}>
                <p className={styles.profileName}>{profileName}</p>
                <p className={styles.username}>{username}</p>
            </div>
        </div>
        <Image src={imageSrc} />
        <div className={styles.postInfo}>
            <div className={styles.userInfo}>
                <p className={styles.profileName}>{profileName}</p>
                <p className={styles.username}>{username}</p>
            </div>
            <div className={styles.text}>
                {text}
            </div>
            <div className={styles.buttons}>
                <div className={styles.icon}>
                    <Image src={like} />
                    <p>{likes}</p>
                </div>
                <div className={styles.icon}>
                    <Image src={comment} />
                    <p>{comments}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
