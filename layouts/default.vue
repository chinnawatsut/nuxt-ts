<template>
  <div>
    <header class="header-site header-sticky">
      <div class="container site-header-nav navbar-expand-md">
        <button 
          class="navbar-toggler collapsed" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarsSite" 
          aria-controls="navbarsExampleDefault" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span class="fas fa-bars"/>
        </button>
        <div 
          class="site-header-logo">
          <a 
            href="index.html" 
            class="logo">
            <img 
              src="~/assets/img/ScrumGood.png" 
              alt="">
          </a>
        </div>
        <nav 
          id="navbarsSite"
          class="nav-menu navbar-collapse collapse" 
        >
          <ul class="navbar-nav bd-navbar-nav flex-row">
            <li 
              class="nav-item">
              <a 
                href="" 
                class="navmenu-link">Home</a></li>
            <li class="nav-item">
              <a 
                id="dropdownMenuLink"
                class="navmenu-link dropdown dropdown-toggle" 
                href="#" 
                role="button"  
                data-toggle="dropdown" 
                aria-haspopup="false" 
                aria-expanded="false"
              >Shop</a>
              <div 
                class="site-menu-dropdown dropdown-menu dropdown-menu-left" 
                aria-labelledby="dropdownMenuLink">
                <div class="container">
                  <span 
                    class="sub-title-category">Categoly</span>
                  <a 
                    href="" 
                    class="sub-menu-dropdown">
                    Parts & Tools</a>
                </div>
              </div>
            </li>
            <li 
              class="nav-item">
              <a 
                href="" 
                class="navmenu-link">Shipping</a></li>
            <li 
              class="nav-item">
              <a 
                href="" 
                class="navmenu-link">Promotion</a></li>
          </ul>
          <!-- Search -->
          <div class="navbar-form" >
            <form 
              role="search" 
              class="live-search-form">
              <div class="input-group">
                <div class="form-field">
                  <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Search product" 
                    name="q">
                  <button 
                    class="live-search-button btn btn-default" 
                    type="submit"><i class="fas fa-search"/>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </nav>
        <div class="navbar-account">
          <a 
            href="#" 
            class="cart"><img 
              src="~/assets/img/shopping-cart-solid.svg" 
              alt=""></a>
        </div>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
