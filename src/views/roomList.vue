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
                                <li v-for="(item,index) in roomList" :key="index" @click="joinRoom(item)">
                                    <h1>{{item.roomName}}</h1>
                                    <p>현재 참가 인원 : {{item.currentUser}}명</p>
                                    <span class="time">{{item.lastChat}}</span>
                                    <div class="bar"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat">
                            <div class="titleBar clearfix" ref="titlebar">
                                <img src="@/assets/list.svg" @click="isSidebar = true"/>
                                <h1 v-if="currentRoomIdx">{{currentRoomTitle}}</h1>
                                <h1 v-else>채팅방을 선택해주세요</h1>
                                <p @click="outRoom()" v-if="currentRoomIdx">나가기</p>
                            </div>
                            <chat :roomIdx="currentRoomIdx"></chat>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import addRoom from "@/components/addRoom.vue"
    import chat from "@/components/chat.vue"
    import vClickOutSlide from 'v-click-outside'
    export default {
        name :"roomListPage",
        data: () => ({
            isSidebar:false,
            dialog: false,
            searchRoom:"",
            roomList : [],
            currentRoomIdx:0,
            currentRoomTitle:""
        }),
        components:{
            addRoom,
            chat
        },
        mounted(){
            this.getRoomList();

            this.$socket.on("sendRoomList",(data)=>{
                this.roomList = data.list;
                for(let item of this.roomList){
                    this.$store.commit("SET_LAST_CHAT_DATE",item.lastChat)
                    item.lastChat = this.$store.state.lastChatDate
                }
            });
            this.$socket.on("joinRoomSuccess",data =>{
                this.currentRoomIdx = data.roomIdx
                const index = this.roomList.findIndex((item) => item.idx == this.currentRoomIdx);
                this.currentRoomTitle = this.roomList[index].roomName
                this.isSidebar = false
            })

            this.$socket.on("outRoomSuccess",data=>{
                this.currentRoomIdx = 0;
                this.currentRoomTitle = "";
                console.log(this.currentRoomIdx);
            });
        },
        methods:{

            /**
             * @description 방퇴장
             */
            outRoom(){
                if(confirm("정말로 채팅방을 나가시겠습니까?")){
                    this.$socket.emit("outRoom",{
                        roomIdx : this.currentRoomIdx,
                        userIdx : this.$store.state.userIdx
                    })
                }
            },

            /**
             * @description 방입장
             */
            joinRoom(item){
                this.$socket.emit("joinRoom",{
                    roomIdx : item.idx,
                    userIdx : this.$store.state.userIdx
                })
            },

            /**
             * @description 방 리스트
             */
            getRoomList(){
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