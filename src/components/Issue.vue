<template>
<div>
    <h1>issue</h1>
    {{ad}}
    </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
    ad(){
      const id = this.id
      console.log(id)
      return 'id: '+id
        },
     }
}
</script>
