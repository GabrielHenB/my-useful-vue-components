<script setup>
/**
 * Carousel Component - v.0.0.2
 * 
 * This defines a scrollable horizontal carousel which accepts items through its default <slot/>. You should also provide it with a
 * prop called 'itemWidth' which is each of the items's minimum width. This is necessary for it to calculate how much it should scroll by itself.
 * 
 * Its important to note that whicever elements you pass to its <slot/> needs to have a min-width property or flex will try to fit them together.
 * -------
 * Isso define um carrossel horizontal scrollavel que aceita itens atraves do seu slot padrao. Tambem deve ser fornecido um valor numerico
 * na prop 'itemWidth' que representa a largura minima de cada item. Isso eh necessario para que ele calcule o scroll sozinho.
 * 
 * Importante salientar que quaisquer elementos passados pelo slot devem ter min-width ou o flex tentara juntar eles e o carrossel nao funciona.
 */

import {ref} from 'vue';

const props = defineProps({
    itemWidth: {
        type: [String, Number],
        required: true,
    },
});

const carousel = ref(null);

const scrollLeft = () => {
    carousel.value.scrollBy({
        left: - (Number(props.itemWidth) + 20), // 20px for flex gap
        behavior: "smooth",
    });
};

const scrollRight = () => {
    carousel.value.scrollBy({
        left: Number(props.itemWidth) + 20, // 20px for flex gap
        behavior: "smooth",
    });
}

const rArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
`;

const lArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
`;

</script>

<template>
    <div class="carousel-external">
        <div @click="scrollLeft" class="carousel-left-arrow">
            <div v-html="lArrowSvg">
            </div>
        </div>
        <div class="carousel-container" ref="carousel">

            <slot>

            </slot>

        </div>
        <div @click="scrollRight" class="carousel-right-arrow">
            <div v-html="rArrowSvg">
            </div>
        </div>
    </div>
</template>

<style>
.carousel-external{
    display: flex;
    align-items: center;
}
.carousel-left-arrow{
    width: 7rem;
    cursor: pointer;
}
.carousel-container{
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    scrollbar-width: none;
    gap: 20px; /* equivale ao gap-5 do tailwind ou 1.25rem */
}
.carousel-right-arrow{
    width: 7rem;
    cursor: pointer;
}
</style>