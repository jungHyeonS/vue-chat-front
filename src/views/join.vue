<template>
    <v-container fluid fill-height>
        <v-row  justify="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>회원가입</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="input.valid" ref="form">
                            <v-text-field  label="아이디" type="text" v-model="input.id" :rules="input.idRules" :error-messages="input.idRulesDup" required @input="checkId()"></v-text-field>
                            <v-text-field  label="비밀번호" type="password" v-model="input.password" :rules="input.passRules" required></v-text-field>
                            <v-text-field  label="비밀번호확인" type="password" v-model="input.passwordChk" :rules="input.repeatPasswordRules" required></v-text-field>
                            <v-text-field  label="닉네임" type="text" v-model="input.nickname" :rules="input.nickRules" required></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" @click="goBack()">취소</v-btn>
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
        data(){
            return{
                input:{
                    valid: false,
                    id:"",
                    idRulesDup:[],
                    password:"",
                    passwordChk:"",
                    nickname:"",
                    
                    idRules:[
                         v => !!v || '아이디를 입력해주세요',
                    ],

                    nickRules:[
                        v => !!v || '닉네임을 입력해주세요.',
                    ],  
                    passRules:[
                        v => !!v || '비밀번호를 입력해주세요.',
                        v => {
                            let target = v;
                            let regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
                            return regExp.test(target) || "비밀번호는 8자이상 16자리 이하,하나 이상에 숫자,영어,특수문자를 포함해주세요.";
                        }
                    ],
                    repeatPasswordRules:[
                        (v) => !!v || '비밀번호를 입력해주세요.',
                        (v) =>  {
                            let target = v;
                            let regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
                            return regExp.test(target) || "비밀번호는 8자이상 16자리 이하,하나 이상에 숫자,영어,특수문자를 포함해주세요.";
                        },
                        (v) => (v === this.input.password) || '비밀번호가 일치 하지 않습니다',
                    ]
                }
            }
        },
        methods:{
            /**
             * @description 아이디 중복 검사
             */
            checkId(){
                let params = {
                    id : this.input.id
                }
                this.axios.post("/duplicate",params).then((res)=>{
                    if(res.data.cnt){
                        this.input.idRulesDup.push("이미 등록된 아이디 입니다")
                    }else{
                        this.input.idRulesDup = [];
                    }
                })
            },

            /**
             * @description 뒤로가기
             */
            goBack(){
                this.$router.go(-1)
            },

            /**
             * @description 회원가입
             */
            join(){
                if(this.input.valid){
                    let params = this.input;
                    this.axios.post("/join",params).then((res)=>{
                        if(!res.data.err){
                            alert("회원가입이 완료되었습니다.");
                            this.$router.replace('/')
                        }else{
                            alert(res.data.errMsg);
                        }
                    }).catch((err)=>{
                        console.log(err);
                    });
                }else{
                    this.$refs.form.validate()
                }
            }
        }
    }
</script>