import React from 'react'
import img from '../images/ogimg-idus.png'
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default function CardUI() {

    const list = [
        {
            image: img,
            title:"Card Title 1"
        },
        {
            image: img,
            title:"Card Title 2"
        },
        {
            image: img,
            title:"Card Title 3"
        },
    ];

    window.$(document).ready(function(){
        window.$(".card-horizen-star").on('click',function(){
            console.log('호출')
            let idx = window.$(this).index();
            window.$(".card-horizen-star").removeClass("on");
              for(var i=0; i<=idx; i++){
                window.$(".card-horizen-star").eq(i).addClass("on");
            }
          });
    })

    const getList = list.map((item,index)=>{
        window.$(document).ready(function(){
            window.$(`.card-select${index}`).on('click',function(){
                console.log('호출')
                let idx = window.$(this).index();
                window.$(`.card-select${index}`).removeClass("on");
                  for(var i=0; i<=idx; i++){
                    window.$(`.card-select${index}`).eq(i).addClass("on");
                }
              });
        })

        return(<div className="card" id={`card-`+ index}>
            <div className="card-img">
                <img src={img} alt={`image` + index}/>
            </div>
            <div className="card-text">
                <p>Card Label</p>
                <p>{item.title}</p>
                <p>
                    <span>Hilight</span>
                    <span>Cross Out</span>
                </p>
            </div>
                <div class="card-star-box">
                <span class={`card-star card-select${index} card-star_left`}></span>

                <span class={`card-star card-select${index} card-star_left`}></span>

                <span class={`card-star card-select${index} card-star_left`}></span>

                <span class={`card-star card-select${index} card-star_left`}></span>

                <span class={`card-star card-select${index} card-star_left`}></span>
                </div>
            <div className="card-bottom-text">
                <p>Lorem Ipsum is simply dummy </p>
            </div>
        </div>)
    })

    return (
        <div id="card-section">
            {getList}

            <div className="card-horizen">
                <div className="card-img">
                    <img src={img} alt="image-horizen"/>
                </div>
                <div className="card-horizen-box">
                    <div className="card-horizen-text">
                        <p>It is a long established</p>
                        <p>using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                    </div>
                    <div class="card-horizen-star-box">
                        <span class="card-horizen-star card-horizen-star_left"></span>
                        <span class="card-horizen-star card-horizen-star_left"></span>
                        <span class="card-horizen-star card-horizen-star_left"></span>
                        <span class="card-horizen-star card-horizen-star_left"></span>
                        <span class="card-horizen-star card-horizen-star_left"></span>
                    </div>  
                </div>
            </div>
        </div>
    )
}
