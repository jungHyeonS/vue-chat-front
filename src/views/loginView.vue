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
                        <v-form>
                            <v-text-field prepend-icon="mdi-account"  label="아이디" type="text"></v-text-field>
                            <v-text-field prepend-icon="mdi-lock"  label="비밀번호" type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" >로그인</v-btn>
                        <v-btn color="primary" >회원가입</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        
    }
</script>