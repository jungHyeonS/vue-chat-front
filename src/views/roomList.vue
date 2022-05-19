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
                                    <p>현재 접속 인원 : 20명</p>
                                    <span class="time">오후 12:28</span>
                                    <div class="bar"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat">
                            <chat></chat>
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
            roomList : []
        }),
        components:{
            addRoom,
            chat
        },
        mounted(){
            this.getRoomList();

            this.$socket.on("sendRoomList",(data)=>{
                this.roomList = data.list;
            });
        },
        methods:{
            joinRoom(item){
                this.$socket.emit("joinRoom",{
                    roomIdx : item.idx
                })
            },
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