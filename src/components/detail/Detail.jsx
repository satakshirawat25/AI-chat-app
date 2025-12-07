import React from 'react'
import './Detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://th.bing.com/th/id/R.bc0d40cb25d56466a4a6fc84dacf1ce8?rik=dYsKEgTp%2b7w9pg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fDownload-pink-Flower-wallpapers-hd.jpg&ehk=U%2fOlCR5KeEa3AK%2fgFnfZQMpZPQG%2fo650pyu5PRrH8Iw%3d&risl=&pid=ImgRaw&r=0" alt="" />
              <span>photo_2024_2.png</span>
              </div>
            
            <img src="./download.png" alt="" className='icon' />
            </div>

          <div className="photoItem">
              <div className="photoDetail">
              <img src="https://th.bing.com/th/id/R.bc0d40cb25d56466a4a6fc84dacf1ce8?rik=dYsKEgTp%2b7w9pg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fDownload-pink-Flower-wallpapers-hd.jpg&ehk=U%2fOlCR5KeEa3AK%2fgFnfZQMpZPQG%2fo650pyu5PRrH8Iw%3d&risl=&pid=ImgRaw&r=0" alt=""   />
              <span>photo_2024_2.png</span>
              </div>
            
            <img src="./download.png" alt="" className='icon'  />
            </div>


            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://th.bing.com/th/id/R.bc0d40cb25d56466a4a6fc84dacf1ce8?rik=dYsKEgTp%2b7w9pg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fDownload-pink-Flower-wallpapers-hd.jpg&ehk=U%2fOlCR5KeEa3AK%2fgFnfZQMpZPQG%2fo650pyu5PRrH8Iw%3d&risl=&pid=ImgRaw&r=0" alt="" />
              <span>photo_2024_2.png</span>
              </div>
            
            <img src="./download.png" alt="" className='icon' />
            </div>


            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://th.bing.com/th/id/R.bc0d40cb25d56466a4a6fc84dacf1ce8?rik=dYsKEgTp%2b7w9pg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fDownload-pink-Flower-wallpapers-hd.jpg&ehk=U%2fOlCR5KeEa3AK%2fgFnfZQMpZPQG%2fo650pyu5PRrH8Iw%3d&risl=&pid=ImgRaw&r=0" alt="" className='icon'   />
              <span>photo_2024_2.png</span>
              </div>
            
            <img src="./download.png" alt="" className='icon'  />
            </div>

          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
         </div>
        <button>Block User</button>
        <button className='logout'>Logout</button>

    
      </div>
      
    </div>
  )
}

export default Detail
