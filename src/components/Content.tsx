'use client'
const posts = [
    {
        id: 1,
        description:
          '第一次參加這局的時候開始怕怕的，後來認真覺得這軟體實在太棒了開始認識這些朋友後，我們就常常在打 玩了10個月後，已經玩194局了真的實在太棒了 還會認識到志同道合的朋友 還有遇到跟自己非常合的夥伴謝謝Eg',
        date: 'Mar 16, 2020',
        author: {
          name: 'Yuan',
          imageUrl:
            'https://cdn.eatgether.com/member/aaa8d07a-9444-4f93-9594-c6420d636421/avatar/e440e13b-1344-43d2-aee2-b4a641521995.jpg',}
    },
    {
        id: 2,
        description:
          '從我的主管兼好姐姐願願望那裡，聽說Eatgether很久了，也曾被她邀請參加過很多聚會，但都礙於時間行程喬不攏，以及太怕生有一點跨不出去心中的檻兒，所以這個APP就在我的手機放著一年沒有使用🥺，直到今天有機會被拖出門參加了一次聚餐，才化解許多先前的顧慮，這個平台與一般的交友軟體非常的不同，其他的與會者都是非常友善健談的人，不會讓人感受壓力，真的很適合我這樣的邊緣人吃飯玩遊戲可以一起湊咖，也能獲得很多在地活動資訊，有機會的話後續也會想嘗試自己參加其他聚會，或是嘗試開團(◍•ᴗ•◍)',
        date: 'Mar 16, 2020',
        author: {
          name: '玥玥',
          imageUrl:
            'https://images.unsplash.com/photo-1609114450169-f0656f84799e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80',}
    },
    {
        id: 3,
        description:
          '下載了EG大概有快一兩年了， 在這過程中只有下載 並沒有實際使用。 真正使用是在今年的12月份 對於2020年的動盪加上一系列的事情 突然覺得如果長時間封閉自己可能會使自己心情低落 所幸打開了EG，想說要勇敢的踏出第一步讓自己的交友圈擴展，認識更多的人、從中選出對自己有幫助的人、不過幸運的事第一次報名藍星星的是 （黃靖茹Alice的團。揮別2020，新年新希望#帶我飛） 在這邊朋友有從事醫療的、家裡開工廠的、打拳擊的 做房仲的、高中自然老師等等。 大家來自各行各業，彼此都不認識。卻在一起野餐跟交換禮物。主持人的幽默談話、小遊戲的懲罰 （讓我印象最深的是找陌生人拍照3張限時三分鍾） 如果我那個活動能讓人走出悲傷的情緒，長期自己一個人，常常不愛笑，真的要來這邊體驗，讓大家的熱情感染妳，使自己的人生視野跟心胸更加的開闊） 最後還有一個跳蚤市場。讓我收穫滿滿的回家 事後蠻慶幸沒有吧軟體刪除的 今年是個很悲傷迷惘的一年。期望2021能成就更好的自己',
        date: 'Mar 16, 2020',
        author: {
          name: '大樹',
          imageUrl:
            'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',}
    },
    {
        id: 4,
        description:
          '以我人生以來，真的是第一次玩這種交友軟體還見面一起完成任務與聊天打屁 這軟體真的有別於其他的不同，至少場所安全明亮，透過見面聚會去認識不同的人事物，對我來說都充滿了新鮮感，每一位來自不同的環境背景，各個有著不同的性格與想法！當下真的有種以後是不是可以「出外靠朋友」的想法湧出來腦袋中，一起出來見面聊著天，大家都是友善的，共通點就是交朋友，沒有很奇怪的思維模式，且透過不同飯主舉辦不同活動，找到志同道合的朋友或是夥伴，從中學習不一樣的領域，或是拉出自己深層的興趣與專長，參加過一次就會想要參加第二次第三次，不一樣的團體活動，這交友平台是不錯的地方！以我這種蠻內向又拘謹的人來說這平台很適合!',
        date: 'Mar 16, 2020',
        author: {
          name: '包子',
          imageUrl:
            'https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1104&q=80',}
    },
    {
        id: 5,
        description:
          '第一局eg，就獻給千層蛋糕了，由於本身是個內向兼高敏感族群，參加活動本來就會很消耗體力跟精神，不過為了走出舒適圈，還是來試試eg，很幸運的是開局的飯主有準備一個很棒的空間，審核的飯友也來自各方，聽到許多不同的故事，漲知識了～然後有貓撸就給讚☺️',
        date: 'Mar 16, 2020',
        author: {
          name: 'Eason',
          imageUrl:
            'https://images.unsplash.com/photo-1567225591450-06036b3392a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',}
    },
    {
        id: 6,
        description:
          '第一次參加的關係，所以選擇了多人的電影局，結果發現大家都很好聊，看電影的時候比較沒辦法互動，但是看完我們接著去聚餐，在吃飯的時候大家就互相聊天自介，氣氛非常熱烈；與會者有不少已經透過之前的局認識了，只有我 是新人，但是大家非常熱情的歡迎我加入這個app，也分享很多之前參與的趣事，基本上第一次的經驗讓我非常滿意，覺得這樣實體見面可以更加拓展自己的生活圈和視野，未來希望能夠參加更多的活動，交到更多的朋友。',
        date: 'Mar 16, 2020',
        author: {
          name: '蓁蓁',
          imageUrl:
            'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',}
    },
    {
        id: 7,
        description:
          '飯主很熱情，而且推薦約吃飯的點也很棒，主要是看到飯主的約的團照片明確，清楚知道要吃的類型，也正是我喜歡的，又遇到這麼冷的天氣，來碗熱呼呼的綠咖哩料理，直接打中我的心❤️，中午時段也是特別多人用餐，還好有訂位讓我們不用等☺️很貼心。 第一次參加聚會跟飯主吃飯特別開心，完全不尷尬，而且這次幾乎都是女生，飯友也特別親切，有被照顧到的感覺。 真的很開心第一次體驗第一次吃飯就遇到好咖 ，肯定會想再次參與聚會。',
        date: 'Mar 16, 2020',
        author: {
          name: '采兒',
          imageUrl:
            'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',}
    },
    {
        id: 8,
        description:
          '第一次參加聚會，其實是蠻緊張的。但團主開團的資訊寫的很清楚，文字也很親切，重點選的餐廳感覺很好吃XD 除此之外，還可以參考其他參加者的評論跟評分，對於新用戶來說是更有安全感的~當天聚會非常開心，下班之後一起吃飯小酌，聊天也沒有甚麼壓力。交流彼此的生活、喜歡的餐廳、感情觀、還有各種開局的心路歷程，是很愉快的夜晚。聽飯友分享各種特別的散步局、外拍局、寫生局，很期待之後參加更多有趣的聚會~',
        date: 'Mar 16, 2020',
        author: {
          name: 'Ann',
          imageUrl:
            'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',}
    },
    {
        id: 9,
        description:
          '那是我頭一次因為「獅子座」而獲得理解與共鳴的一晚，想不到人與人之間的敞開心房是這麼容易的一件事。 喵～',
        date: 'Mar 16, 2020',
        author: {
          name: '蕃茄',
          imageUrl:
            'https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=898&q=80',}
    },
    {
        id: 10,
        description:
          '一次參加❤️上的讀書會，有交流性的互動話題感覺很不錯。這次的主題是在講人際關係，❤️上的簡報做的很清楚讓我們一看就懂。受益良多，謝謝',
        date: 'Mar 16, 2020',
        author: {
          name: 'Morgan',
          imageUrl:
            'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',}
    },
]


export function Content(){
    return(
        <div className="bg-gray-200 flex flex-row justify-center">
            <div className="basis-1/1 md:basis-5/6 lg:basis-5/6 p-4 mb-10">
                <h2 className="text-[#0f0f0f] text-l border-[#3d392c1a] border-b-2 mb-6 pb-2">
                    交友見證
                </h2>
                <img className="w-full" src="https://eatgether.com/static/media/witness_membershare.3bcac456.jpg" alt=""/>
                <h2 className="my-10 text-[#0f0f0f] text-3xl flex justify-center">Eatgether感謝百萬會員支持，任何鼓勵和回饋都是前進的動力</h2>
                
                {/* 以下用 map 把 post 用 callback 重新產生成 element */}
                <section className="mt-5 columns-1 md:columns-2 lg:columns-3 gap-5">
                    {posts.map((post)=>(
                        <article key={post.id} className="mb-5 flex flex-col px-4 pb-2 rounded-lg break-inside-avoid bg-white shadow-md">
                            {/* 會員身份 */}
                            <div className="mt-4 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <span className="absolute inset-0" />
                                        {post.author.name}
                                    </p>
                                </div>
                            </div>
                            {/* 留言 */}
                            <div className="flex description">
                                <p className="mt-2 line-clamp-none text-sm text-start leading-6 text-gray-600">{post.description}</p>
                            </div>
                            {/* 留言日期 */}
                            <div className="flex justify-end gap-x-4 text-xs">
                                <time className="mt-2 text-gray-500">
                                {post.date}
                                </time>
                            </div>
                        </article>

                    ))}
                </section>
            </div>
        </div>
    )
}