import { NextSeo } from 'next-seo';
import CoinSlider from '@/components/ui/coin-card-two';
// import VolumeChart from '@/components/ui/chats/volume-chart';
import { coinSlideData } from '@/data/static/coin-slide-data';
import Avatar from '@/components/ui/avatar';
import TopupButton from '@/components/ui/topup-button';
//images
import AuthorImage from '@/assets/images/author.jpg';

export default function ClassicScreen() {
  return (
    <>
      <NextSeo
        title="Criptic Classic Demo"
        description="Nucal - Liquidity Template"
      />
      <div className="flex flex-wrap">
        <div className="mb-8 w-full sm:mb-0  dark:[&_.swiper-scrollbar>_.swiper-scrollbar-drag]:bg-body/50">
          <CoinSlider coins={coinSlideData} />
        </div>
      </div>

      <div className="flex w-full flex-col sm:mt-8 lg:mt-8 lg:flex-row">
        <div className="flex w-full items-center rounded-lg bg-white p-6 shadow-card dark:bg-light-dark md:col-span-1 md:h-[678px] lg:col-span-5 lg:h-[644px] lg:w-1/3 xl:col-span-3 xl:row-start-1 xl:row-end-2 xl:h-auto xl:w-1/4 2xl:col-span-3  2xl:h-[715px] 2xl:p-6 3xl:col-span-3 3xl:h-[730px] 3xl:p-8 4xl:h-[815px]">
          <div className="w-full">
            <div className="mb-8 h-full">
              <Avatar
                image={AuthorImage}
                alt="Author"
                className="mx-auto mb-6"
                size="lg"
              />
              <h3 className="mb-2 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 3xl:mb-3">
                My Balance
              </h3>
              <div className="mb-7 text-center font-medium tracking-tighter text-gray-900 dark:text-white xl:text-2xl 3xl:mb-8 3xl:text-[32px]">
                $10,86,000
              </div>

              <TopupButton className="md:h-12 " />
            </div>
            <span className="-mx-6 block border-t border-dashed border-t-gray-200 dark:border-t-gray-700 3xl:-mx-8" />
          </div>
        </div>
      </div>

    </>
  );
}
