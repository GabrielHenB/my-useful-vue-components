<script setup>
import SlideBar from '@/components/SlideBar.vue';
import Carousel from '@/components/Carousel.vue';
</script>

<template>
<main style="margin: 8px;">
    <h1 style="text-align: center; font-size: x-large;">A few useful components written in Vue</h1>

    <section style="margin: 6px; border: 1px solid black; border-radius: 20px; padding: 5px;">
        <h2>Animated SlideBar</h2>
        <p>Occupies the full container's width and is animated from left to right.</p>
        <p>Ocupa todo width do container e sua animação vai da esquerda pra direita.</p>
        
        
        <SlideBar size="small" background-color="rgb(14,14,14)" bar-color="rgb(0,100,100)"></SlideBar>

        <p>Props:</p>
        <div class="whichProps">
            <p>name</p> <p>bar-color</p> <p>background-color</p> <p class="requiredPropStyle" title="Required">size</p>
        </div>
    </section>

    <section style="margin: 6px; border: 1px solid black; border-radius: 20px; padding: 5px;">
        <h2>Carousel</h2>
        <p>Receives a set of HTML Elements and joins them inside a scrollable flex.</p>
        <p><strong>Important:</strong> for this version, they need to have a min-width or flex will join them without overflowing and the carousel wont work.</p>
        <p>Recebe um conjunto de elementos e os junta em um flex scrollable de tal forma que as setas acionam um scroll lateral.</p>
        <p><strong>Importante:</strong> Sempre forneça elementos com min-width ou o flex tenta fittar eles juntos, não gerando overflow e bugando.</p>

        <Carousel item-width="250">
            <div style="min-width: 250px; min-height: 300px; background-color: red;"></div>
            <div style="min-width: 250px; min-height: 300px; background-color: blue;"></div>
            <div style="min-width: 250px; min-height: 300px; background-color: yellow;"></div>
            <div style="min-width: 250px; min-height: 300px; background-color: purple;"></div>
            <div style="min-width: 250px; min-height: 300px; background-color: black;"></div>
            <div style="min-width: 250px; min-height: 300px; background-color: pink;"></div>
        </Carousel>

        <p>Props:</p>
        <div class="whichProps">
            <p class="requiredPropStyle" title="Required">itemWidth</p>
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
