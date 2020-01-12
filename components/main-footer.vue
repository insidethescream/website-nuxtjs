<template>
  <footer>
    <p>David Féron - Paris 9e, métro Pigalle</p>
    <nav id="footer__nav">
      <ul>
        <li class="nav__FAQ"><a href="">F.A.Q</a></li>
      </ul>
    </nav>
    <p id="signature">Copyright © 2019&nbsp;<a href="https://tiffany-vachez.com/" target="_blank" rel="noopener">&nbsp;Tiffany Vachez</a></p>
  </footer>
</template>

<style lang="scss">
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 40px;
  background: #404040;
  width: 100%;
  color: white;
  padding: 0 15px;
  font-size: 13px;
}

#footer__nav {
  color: white;

  li {
    list-style-type: none;
  }

  a {
    color: white;
  }
}

#signature {
  a {
    color: #DDC082;

    &:hover {
      color: white;
    }
  }
}
</style>
