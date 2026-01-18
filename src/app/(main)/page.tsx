export default function HomePage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-header__title">Welcome</h1>
      </div>

      <div className="video-grid">
        {Array.from({ length: 12 }).map((_, i) => {
          return (
            <div className="video-card" key={i}>
              <div className="video-card__thumbnail">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Video + {i}
                </div>

                <span className="video-card__duration">11:09</span>
              </div>

              <div className="video-card__content">
                <img
                  src={'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'}
                  alt="Avatar"
                  className="video-card__avatar"
                  style={{ width: 36, height: 36, borderRadius: '50%' }}
                />

                <div className="video-card__info">
                  <h3 className="video-card__title">Title {i}</h3>

                  <div className="video-card__channel">Channel name {i}</div>

                  <p className="video-card__meta">
                    <span>1.2K views</span>
                    <span>2 days ago</span>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
