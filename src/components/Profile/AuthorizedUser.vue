<template>
    <div>
<h3>Привет, {{user.login}}!</h3>
    </div>
</template>
<script>
export default {
    props:[
        'user'
    ]
}
</script>
