<script setup>
import SlideBar from '@/components/SlideBar.vue';
</script>

<template>
<main style="margin: 8px;">
    <h1 style="text-align: center; font-size: x-large;">A few useful components written in Vue</h1>

    <section style="margin: 2px; border: 1px solid black; border-radius: 20px; padding: 5px;">
        <h2>Animated SlideBar</h2>
        <p>Occupies the full container's width and is animated from left to right.</p>
        <p>Ocupa todo width do container e sua animação vai da esquerda pra direita.</p>
        
        
        <SlideBar size="small" background-color="rgb(14,14,14)" bar-color="rgb(0,100,100)"></SlideBar>

        <p>Props:</p>
        <div class="whichProps">
            <p>name</p> <p>bar-color</p> <p>background-color</p> <p class="requiredPropStyle" title="Required">size</p>
        </div>
    </section>

</main>
</template>

<style>
.whichProps{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2px;
    color: #41B883;
    font-size: 0.25 rem;
    margin-top: 5px;
    cursor: default;
}
.whichProps p:hover{
    transform: scale(1.10);
    
}
.requiredPropStyle{
    font-weight: bold;
}
</style>
