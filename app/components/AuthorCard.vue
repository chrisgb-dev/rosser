<template>
    <!-- Author card -->
    <div
        class="relative mt-20 overflow-hidden rounded-4xl border border-[#d8cfbf] bg-white/40 p-8 dark:border-white/10 dark:bg-white/3">
        <!-- Background map texture -->
        <div class="pointer-events-none absolute inset-0 opacity-[0.06]" style="
              background-image: url('https://www.transparenttextures.com/patterns/old-map.png');
            " />

        <div class="relative flex items-center gap-6">
            <img src="~/assets/images/avatar.jpeg" alt="" class="h-24 w-24 rounded-full object-cover" />

            <div>
                <p class="text-xs uppercase tracking-[0.24em] text-[#8c6a43] dark:text-[#d0b089]">
                    Written By
                </p>

                <h3 class="mt-2 font-serif text-3xl" style="font-family: 'Spectral', serif">
                    Chris Rosser
                </h3>

                <p class="mt-3 max-w-2xl leading-8 text-[#52606d] dark:text-[#9ca3af]">
                    Novelist and essayist writing about myth, memory, history and
                    power from Melbourne, Australia.
                </p>
            </div>
        </div>
    </div>

</template>