<template>
  <div class="weapper">
    <ul class="content">
			<button @click="btncilck">jiandi</button>
      <li>分类页面1</li>
      <li>分类页面2</li>
      <li>分类页面3</li>
      <li>分类页面4</li>
      <li>分类页面5</li>
      <li>分类页面6</li>
      <li>分类页面7</li>
      <li>分类页面8</li>
      <li>分类页面9</li>
      <li>分类页面10</li>
      <li>分类页面11</li>
      <li>分类页面12</li>
      <li>分类页面13</li>
      <li>分类页面14</li>
      <li>分类页面15</li>
      <li>分类页面16</li>
      <li>分类页面17</li>
      <li>分类页面18</li>
      <li>分类页面19</li>
      <li>分类页面20</li>
      <li>分类页面21</li>
      <li>分类页面22</li>
      <li>分类页面23</li>
      <li>分类页面24</li>
      <li>分类页面25</li>
      <li>分类页面26</li>
      <li>分类页面27</li>
      <li>分类页面28</li>
      <li>分类页面29</li>
      <li>分类页面30</li>
      <li>分类页面31</li>
      <li>分类页面32</li>
      <li>分类页面33</li>
      <li>分类页面34</li>
      <li>分类页面35</li>
      <li>分类页面36</li>
      <li>分类页面37</li>
      <li>分类页面38</li>
      <li>分类页面39</li>
      <li>分类页面40</li>
      <li>分类页面41</li>
      <li>分类页面42</li>
      <li>分类页面43</li>
      <li>分类页面44</li>
      <li>分类页面45</li>
      <li>分类页面46</li>
      <li>分类页面47</li>
      <li>分类页面48</li>
      <li>分类页面49</li>
      <li>分类页面50</li>
      <li>分类页面51</li>
      <li>分类页面52</li>
      <li>分类页面53</li>
      <li>分类页面54</li>
      <li>分类页面55</li>
      <li>分类页面56</li>
      <li>分类页面57</li>
      <li>分类页面58</li>
      <li>分类页面59</li>
      <li>分类页面60</li>
      <li>分类页面61</li>
      <li>分类页面62</li>
      <li>分类页面63</li>
      <li>分类页面64</li>
      <li>分类页面65</li>
      <li>分类页面66</li>
      <li>分类页面67</li>
      <li>分类页面68</li>
      <li>分类页面69</li>
      <li>分类页面70</li>
      <li>分类页面71</li>
      <li>分类页面72</li>
      <li>分类页面73</li>
      <li>分类页面74</li>
      <li>分类页面75</li>
      <li>分类页面76</li>
      <li>分类页面77</li>
      <li>分类页面78</li>
      <li>分类页面79</li>
      <li>分类页面80</li>
      <li>分类页面81</li>
      <li>分类页面82</li>
      <li>分类页面83</li>
      <li>分类页面84</li>
      <li>分类页面85</li>
      <li>分类页面86</li>
      <li>分类页面87</li>
      <li>分类页面88</li>
      <li>分类页面89</li>
      <li>分类页面90</li>
      <li>分类页面91</li>
      <li>分类页面92</li>
      <li>分类页面93</li>
      <li>分类页面94</li>
      <li>分类页面95</li>
      <li>分类页面96</li>
      <li>分类页面97</li>
      <li>分类页面98</li>
      <li>分类页面99</li>
      <li>分类页面100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
	// 
  created() {
		
  },
	// 组件创建完后调用
	mounted(){
		let weapper = document.querySelector('.weapper')

		this.scroll = new BScroll(weapper, {
				probeType:3,
				pullUpLoad:true
		})
		
		this.scroll.on('scroll', (position)=>{
			console.log(position);
		})

		this.scroll.on('pullingUp',()=>{
			console.log('加载更多');
		})
	},
	methods:{
		btncilck(){
			console.log(999);
		}
	}
};
</script>

<style scoped>
.weapper {
  height: 200px;
  background-color: red;
	overflow: hidden;
}
</style>