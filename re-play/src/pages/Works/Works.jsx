import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Works.module.css'

const PLAY_ICON_PATH = '/icons/play.svg'

const projectMedia = [
  { id: 1, video: '/videos/video-1.mp4', thumb: '/thumbnails/thumb1.jpg' },
  { id: 2, video: '/videos/video-2.mp4', thumb: '/thumbnails/thumb2.jpg' },
  { id: 3, video: '/videos/video-3.mp4', thumb: '/thumbnails/thumb3.jpg' },
  { id: 4, video: '/videos/video-4.mp4', thumb: '/thumbnails/thumb4.jpg' },
  { id: 5, video: '/videos/video-5.mp4', thumb: '/thumbnails/thumb5.jpg' },
  { id: 6, video: '/videos/video-6.mp4', thumb: '/thumbnails/thumb6.jpg' },
  { id: 7, video: '/videos/video-7.mp4', thumb: '/thumbnails/thumb7.jpg' },
  { id: 8, video: '/videos/video-8.mp4', thumb: '/thumbnails/thumb8.jpg' },
  { id: 9, video: '/videos/video-9.mp4', thumb: '/thumbnails/thumb9.jpg' },
]

const initialProjects = projectMedia.map((item) => ({
  id: item.id,
  videoUrl: item.video,
  thumbnailUrl: item.thumb,
  title: `Video ${item.id}`,
}))

const Works = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)
  const [viewedVideos, setViewedVideos] = useState({})
  const [projects, setProjects] = useState(initialProjects)

  const openModal = (videoUrl, id) => {
    setCurrentVideo(videoUrl)
    setModalOpen(true)
    setViewedVideos((prev) => ({ ...prev, [id]: true }))
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setCurrentVideo(null)
    document.body.style.overflow = 'auto'
  }

  return (
    // ✅ Добавлен id="works"
    <section id="works" className={styles.works}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`${styles.projectItem} ${
              viewedVideos[project.id] ? styles.viewed : ''
            }`}
            onClick={() => openModal(project.videoUrl, project.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              className={styles.projectThumbnail}
            />
            <div className={styles.playButton}>
              <img src={PLAY_ICON_PATH} alt="Play" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Контейнер для кнопки "Больше проектов" */}
      <div className={styles.loadMoreButtonContainer}>
        <motion.button
          className={styles.loadMoreButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          БОЛЬШЕ ПРОЕКТОВ
        </motion.button>
      </div>

      {modalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            {currentVideo && (
              <video
                className={styles.videoPlayer}
                src={currentVideo}
                controls
                autoPlay
                loop
                muted
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Works
