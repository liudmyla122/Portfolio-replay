import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Komanda.module.css'
import Modal from './Modal'

const assetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path.replace(/^\/+/, '')}`
}

const CONTROL_ICONS = {
  left: assetPath('/icons/Levo.svg'),
  right: assetPath('/icons/Pravo.svg'),
}

const teamMembers = [
  {
    id: 1,
    name: 'Константин Рыбаченко',
    role: 'ОСНОВАТЕЛЬ-ОПЕРАТОР',
    photo: assetPath('/Photos/Foto-1.png'),
  },
  {
    id: 2,
    name: 'Ксения Малевская',
    role: 'ПРОДЮСЕР',
    photo: assetPath('/Photos/Foto-2.svg'),
  },
  {
    id: 3,
    name: 'Александр Дин',
    role: 'МОНТАЖ',
    photo: assetPath('/Photos/Foto-3.svg'),
  },
  {
    id: 4,
    name: 'Владислав Ковалев',
    role: '3D ARTIST',
    photo: assetPath('/Photos/Foto-4.svg'),
  },
  {
    id: 5,
    name: 'Игорь Алексеенко',
    role: 'VFX',
    photo: assetPath('/Photos/Foto-5.svg'),
  },
  {
    id: 6,
    name: 'Штефан Филитов',
    role: 'ПРОДЮСЕР',
    photo: assetPath('/Photos/Foto-6.svg'),
  },
]

const Komanda = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <section id="komanda" className={styles.komanda}>
      <div className={styles.container}>
        <div className={styles.teamGrid}>
          <AnimatePresence>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className={`${styles.teamCard} ${
                  styles[`teamCard${member.id}`]
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className={styles.photo}
                />
                <div className={styles.info}>
                  <p className={styles.role}>{member.role}</p>
                  <h3 className={styles.name}>{member.name}</h3>
                </div>
              </motion.div>
            ))}
            <motion.div
              key="join-us"
              className={`${styles.teamCard} ${styles.joinUsCard} ${styles.teamCard7}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: teamMembers.length * 0.1,
              }}
              onClick={toggleModal}
            >
              <img
                src={assetPath('/Photos/Foto-7.svg')}
                alt="Присоединиться к команде"
                className={styles.photo}
              />
              <div className={styles.info}>
                <h3 className={styles.joinUsText}>
                  Вы можете стать частью нашей команды
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles.controls}>
          <button className={styles.arrow}>
            <img src={CONTROL_ICONS.left} alt="Предыдущий" />
          </button>
          <button className={styles.arrow}>
            <img src={CONTROL_ICONS.right} alt="Следующий" />
          </button>
        </div>
        <AnimatePresence>
          {modalOpen && <Modal onClose={toggleModal} />}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Komanda
