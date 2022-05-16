<template>
    <v-container fluid fill-height>
        <v-row  justify="center">
            <v-col cols="12" sm="8" md="4" lg="12">
                <v-card>
                    <!-- <p>room{{$store.state.token}}</p> -->
                    <div class="wrap clearfix">
                        
                        <div class="roomList" :class="{'roomDp':isSidebar}" ref="room" v-click-outside="onClick">
                            
                            <div class="searchBar clearfix">
                                <div class="searchWrap">
                                    <input type="text" class="search" placeholder="검색어를 입력해주세요."/>
                                </div>
                                <div class="addRoom">
                                    <img src="@/assets/add.svg"/>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <h1>채팅방 1
                                        
                                    </h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                                <li>
                                    <h1>채팅방 1</h1>
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat">
                            <div class="titleBar clearfix" ref="titlebar">
                                <img src="@/assets/list.svg" @click="isSidebar = true"/>
                                <h1>채팅방 1</h1>
                            </div>
                            <div class="chatList">
                                <div class="chatItem otherChat clearfix">
                                    <div class="chatWrap">
                                        <p>사용자1</p>
                                        <div class="content">
                                            안녕하세요 안녕하세요
                                        </div>
                                    </div>
                                    
                                </div>

                                <div class="chatItem meChat clearfix">
                                    <div class="chatWrap">
                                        <div class="content">
                                            안녕하세요 안녕하세요
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="chatSend clearfix">
                                <textarea>aa</textarea>
                                <div class="sendBtn">
                                    <!-- <v-icon
                                    color="white"
                                    >
                                    mdi-send
                                    </v-icon> -->
                                    <v-icon
                                    color="white"
                                    >
                                    mdi-send
                                    </v-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import vClickOutSlide from 'v-click-outside'
    export default {
        name :"roomListPage",
        data: () => ({
            isSidebar:false
        }),
        mounted(){
            this.axios.get("/roomList",{}).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            });

            // window.addEventListener('click',this.onClick)
        },
        methods:{
            onClick(e){
                console.log(e.target.parentNode);

                if(e.target.parentNode !== this.$refs.titlebar){
                    this.isSidebar = false;
                }
            }
        },
        directives:{
            clickOutSlide : vClickOutSlide.directives
        }
    }
</script>
<style lang="scss" scope>
.clearfix {*zoom:1;}
.clearfix:before, .clearfix:after {display:block; content: ''; line-height: 0;}
.clearfix:after {clear: both;}
.col{
    padding: 0px;
}
.roomList{
    width: 20%;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 600px;
    overflow: scroll;
    float: left;
    position: relative;
    // .addRoom{
    //     width: 50px;
    //     height: 50px;
    //     background: #1976d2;;
    //     text-align: center;
    //     border-radius: 100%;
    //     position: absolute;
    //     right: 20px;
    //     bottom: 20px;
    //     img{
    //         margin-top: 5px;
    //         width: 40px;
    //     }
    //     z-index: 2;
    // }
    .searchBar{
        z-index: 1;
        width: 100%;
        padding-top: 10px;
        padding-left: 10px;
        .searchWrap{
            margin: 0 auto;
            width: 80%;
            float: left;
            .search{
                border: 1px solid #ddd;
                width: 100%;
                height: 30px;
                border-radius:20px;
                padding-left: 10px;
                padding-right: 10px;
                font-size: 14px;
            }
        }
        .addRoom{
            float: left;
            background: #1976d2;;
            width: 30px;
            height: 30px;
            margin-left: 10px;
            cursor: pointer;
            img{
                width: 30px;
            }
        }
    }
    ul{
        list-style: none;
        padding-left: 0;
        li{
            padding:10px;
            position: relative;
            cursor: pointer;
            h1{
                font-size: 18px;
                color: #1976d2;
            }
            p{
                color: #ccc;
                font-size: 12px;
                margin-bottom: 0px;
            }
            .time{
                font-size: 10px;
                color: #ccc;
                position: absolute;
                right: 10px;
                top: 10px;
            }
            .bar{
                width: 100%;
                height: 2px;
                position: absolute;
                bottom: 0px;
                background:#1976d2;
                left:0px;
                // border-radius: 0px 0px 5px 5px;
            }
        }
        
    }
}
.chat{
    width: 80%;
    float: left;
}
.wrap{
    height: 600px;
    .titleBar{
        width: 100%;
        border: 1px solid #ddd;
        padding: 10px;
        h1{
            font-size: 18px;
            color:#1976d2;
            float: left;
        }
        img{
            float: left;
            display: none;
        }
    }
    .chatList{
        background:rgba(202, 229, 255, .3);
        min-height: 500px;
        .chatItem{
            padding: 10px;
            p{
                font-size: 12px;
                color: rgb(175, 175, 175);
                margin-bottom: 0px;
            }
            .content{
                background: #fff;
                display: inline-block;
                padding: 12px;
                border-radius: 0px 10px 10px 10px;
                border: .5px solid #1976d2;
                box-shadow: 1px 1px 5px 1px #ccc;
            }   
        }
        .otherChat{
            .chatWrap{
                float: left;
            }
        }
        .meChat{
            p{
                text-align: right;
            }
            .chatWrap{
                float: right;
                .content{
                    border-radius: 10px 0px 10px 10px;
                    background: #1976d2;
                    color: #fff;
                }
            }
        }
    }
    .chatSend{
        textarea{
            width: 95%;
            resize: none;
            border: .5px solid #1976d2;
            height: 100%;
            float: left;
        }
        .sendBtn{
            width: 5%;
            background: #1976d2;
            float: left;
            text-align: center;
            line-height: 50px;
            i{
                color: white;
            }
        }
    }
}
@media screen and (max-width: 425px) {
    .wrap{
        position: relative;
        .titleBar{
            img{
                display: block;
                margin-right: 10px;
                cursor: pointer;
            }
        }
    }
    .roomList{
        display: none;
        width: 250px;
        position: absolute;
        background: white;
        animation-direction: 1s;
        animation-name: slide;
    }
    
    .roomDp{
        display: block;
    }
    .chat{
        width: 100%;
        float: left;
    }
}
</style>