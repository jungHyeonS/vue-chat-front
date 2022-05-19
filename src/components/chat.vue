<template>
    <div>
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
</template>
<script>
export default {
    name : "chat"
}
</script>