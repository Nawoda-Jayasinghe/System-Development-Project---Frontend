import React from "react";
import Header from "../Dashboard/Header";
import {
  EllipsisHorizontalIcon,
  VideoCameraIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const Chat = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-[#F3F4FF] min-h-screen shadow-2xl">
      <div className="flex w-11/12 justify-between items-center mt-12">
        <h2 className="font-bold text-4xl leading-10 text-[#303972]">Chat</h2>
        <Header />
      </div>
      <div className="w-11/12 flex divide-x-2 divide-[#C1BBEB] bg-white rounded-xl my-10">
        <div className="w-4/12 px-10">
          <p className="text-heading-two font-bold leading-9 text-2xl mt-3">
            Message
          </p>
          <div className="w-full mt-5 relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full text-black pl-10 rounded-3xl"
            />
            <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer font-bold text-heading-two absolute top-[22%] left-[4%]" />
          </div>
          <div className="mt-6">
            <p className="text-lg leading-8 font-semibold text-[#A098AE]">
              Groups
            </p>
            <div className="flex flex-col space-y-4 divide-y-2 divide-[#C1BBEB] mt-5">
              <div className="w-full flex items-center">
                <div className="w-2/12 flex items-center">
                  <img
                    alt="profile"
                    className="w-full h-full rounded-full"
                    src="https://placeimg.com/192/192/people"
                  />
                </div>
                <div className="w-8/12 flex justify-center">
                  <div className="w-full pl-3">
                    <p className="text-heading-two font-semibold text-lg leading-7">
                      Project Amma
                    </p>
                    <p className="text-[#A098AE] font-normal text-sm leading-5">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="w-3/12 flex flex-col justify-start space-y-3 items-center">
                  <p className="text-[#A098AE] font-normal text-xs leading-5">
                    12.45 PM
                  </p>
                  <p className="bg-[#FB7D5B] text-white w-7 h-7 text-xs text-center rounded-full flex justify-center items-center">
                    2
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center pt-4">
                <div className="w-2/12 flex items-center">
                  <img
                    alt="profile"
                    className="w-full h-full rounded-full"
                    src="https://placeimg.com/192/192/people"
                  />
                </div>
                <div className="w-8/12 flex justify-center">
                  <div className="w-full pl-3">
                    <p className="text-heading-two font-semibold text-lg leading-7">
                      Project Amma
                    </p>
                    <p className="text-[#A098AE] font-normal text-sm leading-5">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="w-3/12 flex flex-col justify-start space-y-3 items-center">
                  <p className="text-[#A098AE] font-normal text-xs leading-5">
                    12.45 PM
                  </p>
                  <p className="bg-[#FB7D5B] text-white w-7 h-7 text-xs text-center rounded-full flex justify-center items-center">
                    2
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 mb-7">
            <p className="text-lg leading-8 font-semibold text-[#A098AE]">
              Chats
            </p>
            <div className="flex flex-col space-y-4 divide-y-2 divide-[#C1BBEB] mt-5">
              <div className="w-full flex items-center">
                <div className="w-2/12 flex items-center">
                  <img
                    alt="profile"
                    className="w-full h-full rounded-full"
                    src="https://placeimg.com/192/192/people"
                  />
                </div>
                <div className="w-8/12 flex justify-center">
                  <div className="w-full pl-3">
                    <p className="text-heading-two font-semibold text-lg leading-7">
                      Nethmini Gamage
                    </p>
                    <p className="text-[#A098AE] font-normal text-sm leading-5">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="w-3/12 flex flex-col justify-start space-y-3 items-center">
                  <p className="text-[#A098AE] font-normal text-xs leading-5">
                    12.45 PM
                  </p>
                  <p className="bg-[#FB7D5B] text-white w-7 h-7 text-xs text-center rounded-full flex justify-center items-center">
                    2
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center pt-4">
                <div className="w-2/12 flex items-center">
                  <img
                    alt="profile"
                    className="w-full h-full rounded-full"
                    src="https://placeimg.com/192/192/people"
                  />
                </div>
                <div className="w-8/12 flex justify-center">
                  <div className="w-full pl-3">
                    <p className="text-heading-two font-semibold text-lg leading-7">
                      A.N.Jayasinghe
                    </p>
                    <p className="text-[#A098AE] font-normal text-sm leading-5">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="w-3/12 flex flex-col justify-start space-y-3 items-center">
                  <p className="text-[#A098AE] font-normal text-xs leading-5">
                    12.45 PM
                  </p>
                  <p className="bg-[#FB7D5B] text-white w-7 h-7 text-xs text-center rounded-full flex justify-center items-center">
                    2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-8/12 px-10 flex flex-col divide-y-2 divide-[#C1BBEB]">
          <div className="w-full flex my-3">
            <div className="w-[12%]">
              <img
                alt="profile"
                className="w-16 h-16 rounded-full"
                src="https://placeimg.com/192/192/people"
              />
            </div>
            <div className="w-[88%] flex justify-between items-center">
              <div className="flex flex-col w-5/12">
                <p className="text-heading-two font-bold leading-9 text-2xl">
                  Obi-Wan Kenobi
                </p>
                <div className="flex space-x-2 items-center">
                  <div className="rounded-full h-2 w-2 bg-[#4CBC9A]"></div>
                  <div className="text-[#A098AE]">Online</div>
                </div>
              </div>
              <div className="w-5/12 flex items-center justify-end space-x-4 text-[#A098AE]">
                <EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer" />
                <VideoCameraIcon className="h-8 w-8 cursor-pointer" />
              </div>
            </div>
          </div>
          <div>
            <div className="chat chat-start mt-[20%]">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full"></div>
              </div>
              <div className="chat-header">
                <time className="text-xs text-[#A098AE]">12:45</time>
              </div>
              <div className="chat-bubble bg-[#F5F5F5] text-heading-two">
                Hello!
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className="chat-header">
                <time className="text-xs text-[#A098AE]">12:45</time>
              </div>
              <div className="chat-bubble bg-[#F5F5F5] text-heading-two">
                Can I get access for the budget estimation?
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full"></div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs text-[#A098AE]">12:46</time>
              </div>
              <div className="chat-bubble bg-login-color text-white">
                Hello Nethmini!
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs text-[#A098AE]">12:46</time>
              </div>
              <div className="chat-bubble bg-login-color text-white">
                Sure! I’ll share you the lik of the google sheet we’v created
              </div>
              <div className="text-[#A098AE] chat-footer">Seen at 12:46</div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full mt-5 mb-7 relative">
              <input
                type="text"
                placeholder="Write your message..."
                className="w-full rounded-3xl text-black h-12"
              />
              <button className="absolute top-[12%] right-[1%] h-9 bg-login-color px-7 py-1 rounded-3xl">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
