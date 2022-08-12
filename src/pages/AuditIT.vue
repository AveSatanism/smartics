<template>
  <div id="AuditIT">
    <div>
      <div class="py-[30px] flex flex-wrap gap-x-[76px] justify-center">
        <div class="mt-[30px] site_color_1 flex flex-col gap-[26px]">
          <h1 class="text-h1">Один админ - <br>хорошо... <br>А целая команда <br>готова ему <br>помочь!</h1>
          <p class="text_1">Один человек не может обладать компетенцией <br>
          целой команды профессионалов, но зачастую это и <br>
          не нужно. <br>Часто простая задача решается дорого и не 
          <br>эффективно только из-за того, что сисадмин не <br>знает, как решить ее по-другому.</p>
          <p class="text_3">SMARTICS - ваш лучший друг и помощник. <br>Мы готовы дополнить вашего админа и помочь ему.</p>
          <UIButton variant="orange2">Хочу!</UIButton>
        </div>
        <img class="h-[614px]" src="@/assets/pageContentImage/AuditIT_image.png" width="406" height="614" alt="AuditIT_image">
      </div>
      <section class="site_color_3 site_color_2_background">
        <h2 class="text-h2 py-[36px] text-center">Мы - команда таких же айти специалистов, мы готовы оказать любую <br>
        поддержку своим коллегам. Поможем организовать процессы <br>
        администрирования понятным и надёжным способом.</h2>
      </section>
      <div class="pt-[98px] pb-[112px] flex justify-center site_color_1">
        <div class="w-[835px]">
        <h3 class="text-h3 ml-[15px] mb-[50px]">Мы готовы оказать поддержку существующему IT отделу по ряду пунктов:</h3>
        <ul class="audit_list text_1">
          <li><p>•</p><p>Решение и устранение конкретных проблем</p></li>
          <li><p>•</p><p>Проведение комплексного аудита существующей IT инфрастуктуры и составление дорожной карты её модернизации</p></li>
          <li><p>•</p><p>Временная подмена вашего специалиста на время отпуска и непредвиденных обстоятельств</p></li>
          <li><p>•</p><p>Консалтинг по информационной безопасности</p></li>
        </ul>
        </div>
      </div>
      <ContactForm class="pb-[112px]"/>
    </div>
  </div>
</template>
<script>
import ContactForm from '../components/ContactForm.vue'
import UIButton from '../components/UI/UIButton.vue'

export default {
  components: {
    UIButton,
    ContactForm,
  }
}
</script>
<style>
.audit_list li {
  display: flex;
  column-gap: 8px;
  padding: 27px 56px;
  margin-bottom: 20px;
  border: 2px solid var(--color-3);
  filter: drop-shadow(0px 4px 8px var(--color-1-background));
  border-radius: 15px;
  background-color: var(--color-7);
}
</style>