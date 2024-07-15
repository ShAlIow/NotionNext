// components/Busuanzi.js

import { useEffect } from 'react'

// 暂时注释掉不蒜子代码，避免页面崩溃
/*
import busuanzi from '@/lib/plugins/busuanzi'
import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'
// import { useRouter } from 'next/router'
import { useEffect } from 'react'

let path = ''

export default function Busuanzi () {
  const { theme } = useGlobal()
  const router = useRouter()
  router.events.on('routeChangeComplete', (url, option) => {
    if (url !== path) {
      path = url
      busuanzi.fetch()
    }
  })

  // 更换主题时更新
  useEffect(() => {
    if (theme) {
      busuanzi.fetch()
    }
  }, [theme])
  return null
}
*/

// 使用 Vercount 替代方案，简单返回 null 保持页面结构
export default function Busuanzi() {
  useEffect(() => {
    // 如果需要可以添加额外的逻辑
  }, [])
  return null
}
