import { siteConfig } from '@/lib/config'
import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
        <footer
            className='relative z-10 dark:bg-gray-800 flex-shrink-0 justify-center text-center m-auto w-full leading-6 text-sm p-6 bg-white dark:text-gray-400'
        >

            <span>
                <DarkModeButton />

                <i className='fas fa-copyright' /> {`${copyrightDate}`} <span className='mx-1 animate-pulse'><i className='fas fa-heart' /></span> <a href={siteConfig('LINK')} className='underline font-bold '>{siteConfig('AUTHOR')}</a>.<br />

                {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{siteConfig('BEI_AN')}</a><br /></>}

                <span className='hidden busuanzi_container_site_pv'>
                    <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span> </span>
                <span className='pl-2 hidden busuanzi_container_site_uv'>
                    <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
                <br />
                <h1>行胜于言</h1>
                <span className='text-xs font-serif  text-gray-500 dark:text-gray-300 '>Powered by  <a href={siteConfig('LINK')} className='underline '>{siteConfig('AUTHOR')}</a>.</span>
                {/* 加入你想要添加的计时器脚本 */}
                <span id="timeDate">载入天数...</span>
                <span id="times">载入时分秒...</span>
                <script>
                  var now = new Date();
                  function createtime() {
                    var grt= new Date("25/06/2024 16:44:00"); // 此处修改你的建站时间或者网站上线时间
                    now.setTime(now.getTime() + 250);
                    days = (now - grt) / 1000 / 60 / 60 / 24; dnum = Math.floor(days);
                    hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours);
                    if (String(hnum).length == 1) { hnum = "0" + hnum; } minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
                    mnum = Math.floor(minutes); if (String(mnum).length == 1) { mnum = "0" + mnum; }
                    seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
                    snum = Math.round(seconds); if (String(snum).length == 1) { snum = "0" + snum; }
                    document.getElementById("timeDate").innerHTML = "本站已安全运行 " + dnum + " 天 ";
                    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
                  }
                  setInterval(createtime, 250);
                </script>
            </span>
        </footer>
  )
}

export default Footer
