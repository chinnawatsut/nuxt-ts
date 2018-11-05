<template>
  <div>
    <div class="featured-content">
      <div class="container">
        <h1 class="featured-title">{{ title }}</h1>
        <p class="featured-info">{{ description }}</p>
      </div>
    </div>
    <section class="product-feeds container">
      <h2 class="title-section">Tech & Electronics</h2>
      <div class="row">
        <!--  END item product -->
        <div 
          v-for="(product,index) in productItem" 
          :key="index" 
          class="col-md-6 col-lg-4 product-item">
          <div class="product-wrap">
            <a 
              href="/product/1" 
              class="product-link-cover">
              <div 
                class="product-image" 
                data-image-type="true">
                <figure class="cover-image">
                  <img 
                    :src="product.image" 
                    alt="">
                </figure>
              </div>
            </a>
            <!-- END Photo -->
            <div class="product-info">
              <div class="product-verticle-content">
                <a href="/product/1">
                  <h3 class="product-title">{{ product.name }}</h3>
                </a>
                <div class="product-price">
                  <span class="text-muted">{{ product.price }}</span>
                </div>
              </div>
            </div>
            <!-- END Title -->
            <p>
              <a 
                href="" 
                class="add-to-cart">
                <button
                  class="btn btn-add-to-cart">
                  <span>Buy</span>
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'

@Component
export default class Index extends Vue {
  productItem = [
    { 
      image: 'https://2.bp.blogspot.com/-x-tt4uiv18I/W9gAU0Xc5UI/AAAAAAAAVz4/mPk0LJNV38wRBj81N8iG9Ik6zaEFubtzgCLcBGAs/s1600/Thumb-1.png',
      name: 'Kygo Lumenta RED',
      price: '$200'
    },
    { 
      image: 'https://2.bp.blogspot.com/-x-tt4uiv18I/W9gAU0Xc5UI/AAAAAAAAVz4/mPk0LJNV38wRBj81N8iG9Ik6zaEFubtzgCLcBGAs/s1600/Thumb-1.png',
      name: 'Kygo Lumenta RED',
      price: '$200'
    },
    { 
      image: 'https://2.bp.blogspot.com/-x-tt4uiv18I/W9gAU0Xc5UI/AAAAAAAAVz4/mPk0LJNV38wRBj81N8iG9Ik6zaEFubtzgCLcBGAs/s1600/Thumb-1.png',
      name: 'Kygo Lumenta RED',
      price: '$200'
    },
    { 
      image: 'https://2.bp.blogspot.com/-x-tt4uiv18I/W9gAU0Xc5UI/AAAAAAAAVz4/mPk0LJNV38wRBj81N8iG9Ik6zaEFubtzgCLcBGAs/s1600/Thumb-1.png',
      name: 'Kygo Lumenta RED',
      price: '$200'
    },
    { 
      image: 'https://2.bp.blogspot.com/-x-tt4uiv18I/W9gAU0Xc5UI/AAAAAAAAVz4/mPk0LJNV38wRBj81N8iG9Ik6zaEFubtzgCLcBGAs/s1600/Thumb-1.png',
      name: 'Kygo Lumenta RED',
      price: '$200'
    }
  ]
  title = "Professional online stores"
  description = "ECSite's powerful drag and drop website builder and guided set up get you to the finish line faster, no coding needed."
}
</script>
<style>
</style>
