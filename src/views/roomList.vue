<template>
    <v-container fluid fill-height>
        <v-row  justify="center">
            <v-col cols="12" sm="8" md="4" lg="12">
                <v-card>
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
                                    
                                    <v-icon color="white">
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

        },
        methods:{
            onClick(e){
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

</style>