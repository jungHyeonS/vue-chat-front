<template>
    <v-container fluid fill-height>
        <v-row  justify="center">
            <v-col cols="12" sm="8" md="12" lg="12">
                <v-card>
                    <div class="wrap clearfix">
                        <div class="roomList" :class="{'roomDp':isSidebar}" ref="room" v-click-outside="onClick">
                            <div class="searchBar clearfix">
                                <div class="searchWrap">
                                    <input type="text" class="search" placeholder="검색어를 입력해주세요." v-model="searchRoom"  @keyup.enter="getRoomList()" @blur="getRoomList()"/>
                                </div>
                                <div class="addRoom">
                                    <!--방생성 컴포넌트-->
                                    <addRoom @roomListChange="getRoomList()"></addRoom>
                                </div>
                            </div>
                            <ul>
                                <li v-for="(item,index) in roomList" :key="index">
                                    <h1>{{item.roomName}}</h1>
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
    import addRoom from "@/components/addRoom.vue"
    import vClickOutSlide from 'v-click-outside'
    export default {
        name :"roomListPage",
        data: () => ({
            isSidebar:false,
            dialog: false,
            searchRoom:"",
            roomList : []
        }),
        components:{
            addRoom
        },
        mounted(){
            this.getRoomList();

            this.$socket.on("sendRoomList",(data)=>{
                this.roomList = data.list;
            });
        },
        methods:{

            getRoomList(){
                // this.axios.get("/roomList",{}).then((res)=>{
                //     console.log(res);
                // }).catch((err)=>{
                //     console.log(err);
                // });
                // console.log("socket",this.$socket);
                this.$socket.emit("roomList",{
                    roomName : this.searchRoom
                })
            },

            /**
             * @description 모바일 메뉴 클릭 이벤트
             */
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