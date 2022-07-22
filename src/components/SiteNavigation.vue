<template>
  <nav class="site_navigation_container flex justify-center text-center site_color_2_background">
    <ul class="navigation_links flex flex-wrap justify-center text_8">
      <router-link to="DigitalTransformation"><li><p>цифровая<br>трансформация</p></li></router-link>
      <router-link to="InfrastructureManagement"><li><p>управление<br>инфраструктурой</p></li></router-link>
      <router-link to="AuditIT"><li><p>аудит IT<br>и консалтинг</p></li></router-link>
      <router-link to="404"><li><p>IT - аутсорсинг<br>и техподдержка</p></li></router-link>
      <router-link to="405"><li><p>разработка по</p></li></router-link>
      <router-link to="406"><li><p>отраслевые<br>решения</p></li></router-link>
    </ul>
  </nav>
</template>

<script>
</script>

<style>
  .site_navigation_container {
    position: sticky;
    top: 79px;
    z-index: 1;
    min-height: 45px;
    color: var(--color-7);
  }
  .navigation_links a {
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0 28.5px;
  }
  .navigation_links a.router-link-active {
    background: var(--color-1);
    border-radius: 10px;
  }
</style>