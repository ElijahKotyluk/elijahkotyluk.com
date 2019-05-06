<template>
  <nav class="dot-nav">
    <ul class="dot-nav--list list-unstyled">
      <li class="dot-nav--item is-active">
        <a href="#" class="dot-nav--link">Lorem ipsum dolor.</a>
      </li>
      <li class="dot-nav--item">
        <a href="#" class="dot-nav--link">Assumenda, officia omnis.</a>
      </li>
      <li class="dot-nav--item">
        <a href="#" class="dot-nav--link">Sed, alias totam.</a>
      </li>
      <li class="dot-nav--item">
        <a href="#" class="dot-nav--link">Officia, itaque, vitae!</a>
      </li>
      <li class="dot-nav--item">
        <a href="#" class="dot-nav--link">Repellendus, veritatis, deserunt.</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'DotNav',
  // Get dot-nav--item and add class to selected/remove class from other
  methods: {}
}
</script>

<style lang="scss" scoped>
.dot-nav {
  position: fixed;
  top: 50%; right: 0;
  transform: translate(-50%, -50%);
}
/* Fin Init */

.dot-nav--item {
  position: relative;
  display: block;
  width: 16px; height: 16px;
  margin-bottom: 28px;
  border: 3px solid #000000;
  border-radius: 50%;
  &:before, &:after { content: ""; }
  &:before {
    position: absolute;
    top: -1px; bottom: -1px; left: -1px; right: -1px;
    transform: scale(0);
    opacity: 0;
    border-radius: 50%;
    background-color: #000000;
    transition: all .3s;
  }
  &:after {
    display: block;
    width: 3px; height: 30px;
    margin: 13px auto 0;
    background-color: #000000;
  }
  &:last-child:after { display:none; }
  &:hover { cursor: pointer; }
  &.is-active:before {
    opacity: 1;
    transform: scale(1);
  }
}
.dot-nav--link {
  position: absolute;
  top: 50%;
  visibility: hidden;
  transform: translate(-120%, -50%);
  width: 200px;
  padding: 5px 10px;
  opacity: 0;
  color: #111; background-color: #000000;
  transition: all .3s;
  &:before {
    content: "";
    position: absolute;
    top: 50%; left: 100%;
    width: 0; height: 0;
    border-width: 6px 0 6px 8px;
    border-color: transparent transparent transparent #000000;
    border-style: solid;
    transform: translateY(-50%);
  }

  .dot-nav--item:hover & {
    visibility: visible;
    opacity: 1;
    transform: translate(-110%, -50%);
  }
}
</style>
