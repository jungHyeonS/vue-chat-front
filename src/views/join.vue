<template>
    <v-container fluid fill-height>
        <v-row  justify="center">
            <v-col cols="12" sm="8" md="4" lg="4">
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>회원가입</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="input.valid">
                            <v-text-field  label="아이디" type="text" v-model="input.id" :rules="input.idRules" required></v-text-field>
                            <v-text-field  label="비밀번호" type="password" v-model="input.password" :rules="input.passRules" required></v-text-field>
                            <v-text-field  label="비밀번호확인" type="password" v-model="input.passwordChk"></v-text-field>
                            <v-text-field  label="닉네임" type="password" v-model="input.nickname"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" >로그인</v-btn>
                        <v-btn color="primary" @click="join()">회원가입</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name :"joinPage",
        computed: {
            confirmPasswordRules() {
                let rules = "";
                if(this.input.passwordChk == ""){
                    rules = [(this.input.passwordChk == "") || "비밀번호를 입력해주세요."];
                }else{
                    rules = [(this.input.password === this.input.passwordChk) || "비밀번호가 일치 하지 않습니다"];
                }
                
                return rules;
          },
        },
        data: () => ({
            input:{
                valid: false,
                id:"",
                password:"",
                passwordChk:"",
                nickname:"",
                idRules: [
                    v => !!v || '아이디를 입력해주세요.',
                ],
                passRules:[
                    v => !!v || '비밀번호를 입력해주세요.',
                    v => {
                        let target = v;
                        const petten = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                        return petten.test(target) || "비밀번호는 8자이상,하나 이상에 숫자,영어,특수문자를 포함해주세요.";
                    }
                ],
            }
        }),
        methods:{
            join(){
                // console.log(this.input.valid);
                if(this.input.valid){
                    let params = this.input;
                    this.axios.post("/join",params).then((res)=>{
                        console.log(res);
                    }).catch((err)=>{
                        console.log(err);
                    });
                }
            }
        }
    }
</script>