import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'

///Components
import Poster from "../components/Poster/Poster.Component"
import Playfilter from "../components/Playfilter/Playfilter.Component"

const  PlayPage=()=> {
  return (
    <>
    <div className="container mx-auto px-4  my-10">
      <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
        <div className="lg:w-3/4 p-4 bg-gray-100 rounded">
          <h2  className="text-2xl font-bold mb-4">Plays In NCR Delhi</h2>
             <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster  isPlay={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAxNCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00319088-awlzvmctwy-portrait.jpg"
              
                 title="Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral" subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"/>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster  isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kathakar-international-storytellers-festival-0-2022-11-15-t-5-15-40.jpg"
              
                 title="Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral" subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"/>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster  isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sweet-dreams-by-ashish-gupta-0-2022-11-17-t-4-30-52.jpg"
              
                 title="Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral" subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"/>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster  isPlay={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAxNCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00319088-awlzvmctwy-portrait.jpg"
              
                 title="Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral" subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"/>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster  isPlay={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAxNCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00319088-awlzvmctwy-portrait.jpg"
              
                 title="Jo Bolta Hai Wohi Hota Hai ft By Harsh Gujral" 
                 subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                 />
              </div>
             </div>
        </div>
        <div className="lg:w-1/4 p-4 bg-gray-100 rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <Playfilter title="Date" tags={["Today","Tomorrow","This Weekend"]}/>
          </div>
          <div>
            <Playfilter title="Language" tags={["English","Hindi","Tamil"]}/>
          </div>

        </div>

      </div>

    </div>
    
    
    
    </>
  )
}

export default DefaultLayoutHoc(PlayPage)