<template>
    <v-container fluid fill-height>
        <v-row  justify="center">
            <v-col cols="12" sm="8" md="4" lg="4">
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="input.valid">
                            <v-text-field prepend-icon="mdi-account"  label="아이디" type="text" v-model="input.id" :rules="input.idRules" required></v-text-field>
                            <v-text-field prepend-icon="mdi-lock"  label="비밀번호" type="password" v-model="input.password" :rules="input.passRules" required></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login()">로그인</v-btn>
                        <v-btn color="primary" @click="goJoin()">회원가입</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name :"loginView",
        data: ()=>({
            input:{
                valid:false,
                id:"",
                password:"",
                idRules:[
                    v => !!v || '아이디를 입력해주세요.'
                ],
                passRules:[
                    v => !!v || '비밀번호를 입력해주세요.'
                ]
            }
        }),
        methods:{

            /**
             * @description 로그인
             */
            login(){
                if(this.input.valid){
                    let params = {
                        id : this.input.id,
                        pass : this.input.password
                    }
                    this.axios.post("/login",params).then((res)=>{
                        // console.log(res);
                        if(res.data.err == 0){
                            alert("로그인 성공");
                            this.$store.commit("SET_TOKEN",res.data.accessToken)
                            this.$router.replace('/roomList')
                        }else{
                            alert(res.data.errMsg);
                        }
                    }).catch((err)=>{
                        console.log(err);
                    });
                }else{
                    alert("필수 값을 입력해주세요.");
                }
            },

            /**
             * @description 회원가입 페이지 이동
             */
            goJoin(){
                this.$router.push('join')
            }
        }
    }
</script>