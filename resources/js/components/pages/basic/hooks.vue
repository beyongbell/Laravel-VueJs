<template>
    <div>
        <h1 ref="MyRef"> Hook tutorial </h1>
        <p> My Name is {{ name }} </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Tinnakorn'
        }
    },
    beforeCreate() {
        console.log('beforeCreate', this.name);
    },
    created() {
        console.log('created', this.name);
    },
    mounted() {
        console.log('mounted', this.$refs.MyRef);
    }
}
</script>


