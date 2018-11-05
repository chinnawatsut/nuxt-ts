<template>
  <section class="main-content product-feeds container">  
    <div class="wrapper-section-filter">
      <h2 class="title-section">Featured Products by <b>Scrum Good</b></h2>
      <div class="form-select-wrapper">
        <select 
          class="form-field-select" 
        >
          <option value="manual">Featured</option>
          <option value="price-ascending">Price: Low to High</option>
          <option value="price-descending">Price: High to Low</option>
          <option value="title-ascending">A-Z</option>
          <option value="title-descending">Z-A</option>
          <option value="created-ascending">Oldest to Newest</option>
          <option value="created-descending">Newest to Oldest</option>
          <option 
            value="best-selling" 
            selected="selected">Best Selling</option>
        </select>
        <label class="form-field-title">Sort by</label>
        <span class="fas fa-sort-down"/>
      </div>
    </div> 
    <div class="row">
      <div class="col-md-6 col-lg-3 product-item">
        <div class="product-wrap">
          <a 
            href="product.html" 
            class="product-link-cover">
            <div 
              class="product-image" 
              data-image-type="true">
              <figure class="cover-image">
                <img 
                  src="https://2.bp.blogspot.com/-x-tt4uiv18I/W9gAU0Xc5UI/AAAAAAAAVz4/mPk0LJNV38wRBj81N8iG9Ik6zaEFubtzgCLcBGAs/s1600/Thumb-1.png" 
                  alt="">
              </figure>
            </div>
          </a>
          <!-- END Photo -->
          <div class="product-info">
            <div class="product-verticle-content">
              <a href="product.html">
                <h3 class="product-title">Daily Essentials R E D</h3>
              </a>
              <div class="product-price">
                <span class="data-price">¥2,000</span>
              </div>
            </div>
          </div>
          <!-- END Title -->
        </div>
      </div>
      <!--  END item product -->
    </div>
  </section>
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
