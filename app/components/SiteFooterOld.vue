<template>
  <footer class="footer footer-center p-10">
    <aside>
      <img src="~/assets/images/logo.webp" alt="Chris Rosser Logo" width="64" />
      <p class="font-bold">
        Chris Rosser
      </p>
      <NuxtLink to="/privacy" class="text-sm text-600 cursor-pointer">
        Privacy Policy
      </NuxtLink>
      <p>&copy; 2007 &ndash; {{ new Date().getFullYear() }} - All right reserved<br />
        Some affiliate links in use.</p>
      <nav class="nav">
        <div class="grid grid-flow-col gap-4">
          <NuxtLink to="https://medium.com/@chrisrosser" target="_blank">
            <svg width="24" height="24" viewBox="0 -55 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
              <g>
                <path
                  d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
                  fill="#FFFFFF"></path>
              </g>
            </svg>
          </NuxtLink>
          <NuxtLink to="https://chrisrosser.substack.com" target="_blank">
            <svg width="24" height="24" viewBox="0 0 48 48" id="a" xmlns="http://www.w3.org/2000/svg">
              <path class="b"
                d="m40.0248,10.0817v-4.5814c-.3229,0-.7411-.0004-1.6553-.0004l-28.9669.0004c-.9142,0-1.318,0-1.6553,0v4.5814c.2164,0,.7411.0005,1.6553.0005l28.9669-.0005c.9142,0,1.4122,0,1.6553,0Z"
                fill="#FFFFFF" />
              <path class="b"
                d="m40.0248,18.3503v-4.5814H9.4025c-.9142,0-1.3777,0-1.6553,0v4.5814c.2646,0,.7411,0,1.6553,0h30.6223Z"
                fill="#FFFFFF" />
              <path class="b"
                d="m40.2557,42.4999v-20.1821c0-.1633-.9724-.1077-1.8866-.1077H9.4022c-.9142,0-1.6553-.0555-1.6553.1077v19.8878c.2814-.1622,15.3415-8.2118,16.1691-8.5978.5156.2972,13.6461,7.3385,16.3406,8.8914l-.0008.0007Z"
                fill="#FFFFFF" />
            </svg>
          </NuxtLink>
        </div>
      </nav>
    </aside>
  </footer>
</template>
