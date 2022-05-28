<template>
    <div>
        <div class="emptyChat" v-if="!roomIdx">
            <p>채팅방을 클릭하여 채팅을 시작해보세요!</p>
        </div>
        <div class="chatWrap" v-else>
            <div class="chatList" ref="chatList">
                <div v-for="(item,index) in chatList" :key="index">
                    <div class="chatItem  clearfix" v-if="item.isQuit == 'N'"
                    :class="{'meChat' : $store.state.userIdx == item.userIdx, 'otherChat' : $store.state.userIdx != item.userIdx}">
                        <div class="chatWrap">
                            <p v-if="$store.state.userIdx != item.userIdx">{{item.nickname}}</p>
                            <div class="content">
                                {{item.content}}
                            </div>
                        </div>
                    </div>
                    <div v-else class="joinOther">
                        <p>{{item.content}}</p>
                    </div>
                </div>
                
                
                <!-- <div class="joinOther">
                    <p>서정현 님이 입장하셨습니다</p>
                </div> -->
            </div>
            <div class="chatSend clearfix">
                <textarea v-model="content"></textarea>
                <div class="sendBtn" @click="sendMessage()">
                    <v-icon color="white">
                        mdi-send
                    </v-icon>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "chat",
    props:{
        roomIdx:{
            type:[String,Number],
            default:0
        }
    },
    data:()=>({
        content:"",
        chatList:[]
    }),
    watch: {
        roomIdx: function(value, oldValue) {
            this.content = "";
            this.getChatList(value)
        }
    },
    mounted(){
        this.getSocektChatList();
    },
    methods:{

        /**
         * @description 채팅 리스트가져오기 (REST)
         */
        getChatList(roomIdx){
            this.axios.get(`/chatList/${roomIdx}`,{}).then((res)=>{
                if(!res.data.err){
                    this.chatList = res.data.list
                    setTimeout(()=>{
                        this.$refs.chatList.scrollTop = this.$refs.chatList.scrollHeight
                    },100)
                }
            }).catch((err)=>{
                console.log(err);
            });
        },

        /**
         * @description 채팅 리스트 가져오기 (소켓)
         */
        getSocektChatList(){
            this.$socket.on("getChatList",data =>{
                console.log("getChatList",data);
                this.chatList = data.chatList
                setTimeout(()=>{
                    this.$refs.chatList.scrollTop = this.$refs.chatList.scrollHeight
                },100)
            })
        },

        /**
         * @description 메세지 전송
         */
        sendMessage(){
            let params = {
                content : this.content,
                roomIdx : this.roomIdx,
                userIdx : this.$store.state.userIdx
            }
            this.$socket.emit("sendMessage",{
                input : params
            })
            this.content = "";
        }
    }
}
</script>