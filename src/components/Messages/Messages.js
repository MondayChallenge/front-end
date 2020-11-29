import React from "react";
import Navigation from '../Navigation/Navigation';
import './Messages.css';
import DF_headshot from "assets/img/David_Felber_headshot.png";
import { ReactSVG } from 'react-svg'

const Messages = () => {
  return (
    <div class="new-messages">
      <Navigation />
      <div id='messagesArea'>
        <div id='messagesBox'>
          <div id='inboxToolBar'>
            <div className="search-box border-class-3">
              <ReactSVG className="image-99" src="/public/search.svg"/> 
              <span class="search  font-class-1 border-class-1">Search</span>
            </div>
            <div class="sort-box font-class-4 ">
              <div class="sort font-class-1">Sort: 
                <select class="sort-menu font-class-1">
                  <option value="Newest" selected="selected">Newest First</option>
                  <option value="Oldest" >Oldest First</option>
                </select>
                <img src="/public/sort.svg" alt=''/>
              </div>
            </div>
            <div className="icons">              
                <img class="compose icon" alt=''
                src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-100@2x.png"
              />
              <img
                class="edit icon" alt=''
                src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-64@2x.png"
              />
              <img class="delete icon" alt=''
                src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-66@2x.png"
              />
            </div>
             
          </div>
          <div id='messagesList'>
            <div class='messageEntry'>
              <div class="leftMessageEntry">
                <div class="photo">
                  <img class="smallPhoto" alt=''
                    src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/ellipse-1-1@2x.png"
                  />
                  <span class="smallInitial font-class-3 ">KS</span>
                </div>
                <div class="select border-class-1"></div>
                <div class='star'>
                  <img class="starIcon" alt=''
                    src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/star@2x.png"
                  />
                </div>
              </div>
              <div class="rightMessageEntry">
                <div class="messageHead">
                  <div class="smallName  font-class-1 ">Kristen Smith</div>
                  <div class="smallDate  font-class-1 ">Today</div>
                </div>
                <p class="messageTitle  font-class-2 ">Quotation for Air Duct Installation</p>
                <p class="messageContent font-class-1 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique
                  purus metus, in lacinia sapien scelerisque lobortis.
                </p>
              </div>  
            </div>
            {/* * * * */}
            <div class='messageEntry'>
              <div class="leftMessageEntry">
                <div class="photo">
                  <img class="smallPhoto" alt=''
                     src={DF_headshot}
                   />
                   
                </div>
                <div class="select border-class-1"></div>
                <div class='star'>
                  <img class="starIcon" alt=''
                    src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/star@2x.png"
                  />
                </div>
              </div>
              <div class="rightMessageEntry">
                <div class="messageHead">
                  <div >
                    <span class="smallName  font-class-1 ">David Felber</span>
                    <img class="unread" alt=''
                      src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/unread@2x.png"
                    />
                  </div>
                  <div>
                    <span>
                      <span class="x2 font-class-1 ">2</span>
                      <img class="attachments" alt=''
                        src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/vector-5@2x.png"
                      />
                    </span>
                    <div class="smallDate  font-class-1 ">Today</div>
                  </div>
                </div>
                <p class="messageTitle  font-class-2 ">Quotation for Air Duct Installation</p>
                <p class="messageContent font-class-1 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique
                  purus metus, in lacinia sapien scelerisque lobortis.
                </p>
              </div>  
            </div>
             {/* * * * */}
             <div class='messageEntry'>
              <div class="leftMessageEntry">
                <div class="photo">
                  <img class="smallPhoto" alt=''
                    src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/ellipse-1-2@2x.png"
                  />
                  <div class="smallInitial font-class-3 ">WT</div>
                </div>
                <div class="select border-class-1"></div>
                <div class='star'>
                  <img class="starIcon" alt=''
                    src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/star@2x.png"
                  />
                </div>
              </div>
              <div class="rightMessageEntry">
                <div class="messageHead">
                  <div class="smallName  font-class-1 ">Wesley Thomas</div>
                  <div class="smallDate  font-class-1 ">Today</div>
                </div>
                <p class="messageTitle  font-class-2 ">Quotation for Air Duct Installation</p>
                <p class="messageContent font-class-1 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique
                  purus metus, in lacinia sapien scelerisque lobortis.
                </p>
              </div>  
            </div>
          </div>
        </div>
        <div id='selectedMessage'>
          <div id='messageContent-head'>
            <div>
              <img class="largePhoto" alt=''
                src={DF_headshot}
              />
              <span class="largeName  font-class-1 ">David Felber</span>
            </div>
            <div>
              <img class="clockIcon" alt=''
                src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-67@2x.png"
              />
              <span class="longTime font-class-1 ">June 15, 2020 at 12:14 PM</span>
            </div>
          </div>
          <div id='messageContent-title'>
            <div class=" largeTitle font-class-1 ">Quotation for Air Duct Installation</div>

            <div id='editIcons'>
              <img class="forward editIcon" alt=''
                src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-68@2x.png"
              />
              <img class="vip editIcon" alt=''
                src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-70@2x.png"
              />
              <img class="print editIcon" alt=''
                src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-69@2x.png"
              />
              <img class="more editIcon" alt=''
                src="https://anima-uploads.s3.amazonaws.com/projects/5fa1a82d0aa76a11ee1c02fa/releases/5fa1b6c90aa76a11ee1c03d5/img/image-101@2x.png"
              /> 
            </div>
          </div>
          
          <div id='messageContent-text'>
            <p class="text font-class-1 ">
              Hi David,<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus metus in lacinia
              sapien scelerisque sed. Etiam volutpat massa metus, et tempor nulla ultrices ut. Fusce et venenatis duis porttitor
              magna erat. <br /><br />Sed aliquam accumsan velit at pharetra. Sed et est vel magna accumsan posuere. Proin
              efficitur metus nec ullamcorper auctor. Donec quis tincidunt maecenas lobortis ultrices nibh, vel porta nibh varius
              ut.<br /><br />Thanks,<br /><br />Kristen
            </p>
          </div>
          <div className='rectangle-174 messageContent-attachments font-class-1 '>
            <span className='border-class-1'>2 Attachments</span>
          </div>
        </div>
        </div>
    </div> 
  );
};

export default Messages;
