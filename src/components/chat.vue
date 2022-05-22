<template>
    <div>
        <div class="emptyChat" v-if="!roomIdx">
            <p>채팅방을 클릭하여 채팅을 시작해보세요!</p>
        </div>
        <div class="chatWrap" v-else>
            <div class="chatList">
                <!-- <div class="chatItem otherChat clearfix">
                    <div class="chatWrap">
                        <p>사용자1</p>
                        <div class="content">
                            안녕하세요 안녕하세요
                        </div>
                    </div>
                    
                </div> -->

                <div class="chatItem  clearfix" v-for="(item,index) in chatList" :key="index"
                :class="{'meChat' : $store.state.userIdx == item.userIdx, 'otherChat' : $store.state.userIdx != item.userIdx}">
                    <div class="chatWrap">
                        <p v-if="$store.state.userIdx != item.userIdx">{{item.nickname}}</p>
                        <div class="content">
                            {{item.content}}
                        </div>
                    </div>
                    
                </div>
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
            console.log(value);
            console.log(oldValue);
        }
    },
    mounted(){
        this.$socket.on("getChatList",data =>{
            console.log("getChatList",data);
            this.chatList = data.chatList
        })
    },
    methods:{
        sendMessage(){
            let params = {
                content : this.content,
                roomIdx : this.roomIdx,
                userIdx : this.$store.state.userIdx
            }
            this.$socket.emit("sendMessage",{
                input : params
            })
        }
    }
}
</script>