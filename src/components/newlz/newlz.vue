<template>
    <div class="newlz">
       这是新增连载

        <img :src="lbimgsrc" />
    </div>
</template>
<style>
.newlz{
    color:blue;
}

</style>
<script>

    export default{
        data(){
            return {
               lbimgsrc:'http://ofv795nmp.bkt.clouddn.com/lunbo1.jpg'
            }
        }
    }

</script>
