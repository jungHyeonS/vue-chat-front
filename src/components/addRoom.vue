<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" src="@/assets/add.svg"/>
            </template>
            <v-card>
                <v-toolbar
                color="primary"
                dark
                >채팅방 생성</v-toolbar>
                <v-card-text>
                    <div>
                        <v-form v-model="input.valid">
                            <v-text-field label="방 이름" type="text" v-model="input.roomName" :rules="input.roomRules" required></v-text-field>
                        </v-form>
                    </div>
                </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="warning" text @click="dialog = false">
                        취소
                    </v-btn>
                    <v-btn color="primary" text @click="roomCreate()">
                        생성
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    name : "addRoom",
    data:()=>({
        dialog : false,
        input:{
            valid:false,
            roomName:"",
            roomRules:[
                v => !!v || '방이름을 입력해주세요.'
            ]
        }
    }),
    methods:{
        roomCreate(){
            console.log(this.input);
            if(this.input.valid){
                const params = {
                    roomName : this.input.roomName
                }
                this.axios.post("/addRoom",params).then((res)=>{
                    // console.log(res);
                    if(res.data.err == 0){
                        alert("방이 생성되었습니다.");
                        this.dialog = false;
                    }else{
                        alert(res.data.errMsg);
                        return false;
                    }
                }).catch((err)=>{
                    console.log(err);
                });
                
            }else{
                alert("방이름을 입력해주세요.");
                return false
            }
        }
    }
}
</script>