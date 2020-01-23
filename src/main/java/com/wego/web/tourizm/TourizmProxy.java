package com.wego.web.tourizm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.wego.web.proxy.Box;

import lombok.Data;

@Data
@Component("tproxy")
public class TourizmProxy {
	@Autowired TourizmMapper tourizmMapper;
	@Autowired Tourizm tourizm;
	@Autowired Box<String> box;
	@Autowired Trunk<String> trunk;

	public List<String> writePLACE() {
		List<String> place = Arrays.asList("테헤란로","선릉과정릉","포스코미술관",
				"카페거리","코엑스아쿠아리움","경복궁","N서울타워","명동",
				"북촌한옥마을","인사동","창덕궁",
				"롯데월드","청계천","남산",
				"동대문 디자인 플라자","스타필드 코엑스몰","광장시장","도산공원");
		
		return place;
	}
	
	public List<String> writeSPOT() {
		List<String> spot = Arrays.asList("서울특별시 강남구","131 삼성2동 강남구 서울특별시","서울 강남구 테헤란로 440 포스코센터 지하1층","서울특별시 강남구 역삼동 테헤란로1길 28","서울 강남구 영동대로 513 지하 1층","서울특별시 종로구 세종로 사직로 161","서울특별시 용산구 용산2가동 남산공원길 105","서울특별시 중구 명동",
				"서울특별시 종로구 가회동 계동길 37","서울특별시 종로구 인사동","서울특별시 종로구 와룡동 율곡로 99",
				"서울특별시 송파구 잠실동 올림픽로 240","서울특별시 종로구 용신동 청계천로","서울특별시 중구 용산2가동 삼일대로 231",
				"서울특별시 중구 을지로7가 을지로 281","서울특별시 강남구 삼성1동 영동대로 513","서울특별시 종로구 종로4가 창경궁로 88",
				"서울 강남구 영동대로 513","서울 강남구 도산대로45길 20 도산전시관");
		return spot;
	}
	
	public List<String> writeTOURIZMINFO() {
		List<String> tourizmInfo = Arrays.asList("테헤란로","선릉과정릉","포스코미술관","카페거리","코엑스아쿠아리움","궁궐 한복체험 박물관 고즈넉한공연","케이블카 야경투어 전망대 화려한 성곽길","먹거리 볼거리 데이트코스",
				"한복체험 박물관 공방카페","볼거리 데이트 산책","궁궐 단풍구경 가을소풍 소박한산책길",
				"놀이동산 회전목마 자이로드롭","야경 야시장 산책로 화려한나들이","둘레길 전망대 산책로",
				"led장미 시장 야경 나들이","트렌디함 아쿠아리움 데이트 박람회","인심좋은 활기찬 재래시장 나들이 데이트",
				"글로벌 비즈니스 메카, 최고의 전시회","나들이");
		return tourizmInfo;
	}
	
	public List<String> writeHEARTCOUNT() {
		List<String> heartcount = Arrays.asList("");
		return heartcount;
	}
	
	public List<String> writeIMG() {
		List<String> img = Arrays.asList(
				"https://cdn.crowdpic.net/detail-thumb/thumb_d_CF17E73F33A3EC79EC61FF29B0BE1F48.jpg",
				"http://www.k-heritage.tv/DataFolder/Upload/Editor/se20131211111420.jpg",
				"http://artminhwa.com/wp-content/uploads/2017/11/SR171103A.jpg",
				"http://pds.skyedaily.com/news_data/1466923057xNnkwzSIdwkKdTaH3.jpg",
				"http://www.kyeonggi.com/news/photo/201705/1356685_1249655_5206.jpg",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20141014_7%2F1413279368535l3xVK_JPEG%2F%25BC%25AD%25BF%25EF_%25B0%25E6%25BA%25B9%25B1%25C3%25B4%25DC%25C7%25B3_2.JPG%3Ftype%3Dm500_500&type=f&size=86x86",
				 "https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_206%2F1396854867641qfjws_JPEG%2F%25BC%25AD%25BF%25EF_N%25BC%25AD%25BF%25EF%25C5%25B8%25BF%25F6_1.JPG%3Ftype%3Dm500_500&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=https%3A%2F%2Fmap.naver.com%2Fv5%2Fapi%2Fv2%2Fpanorama%2Fthumbnail%2FFhhZwgaRmGopApUy1sg_Ag%3Fheading%3D157.39%26width%3D86%26height%3D86&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_118%2F1396856013658RKzfL_JPEG%2F%25BC%25AD%25BF%25EF_%25BA%25CF%25C3%25CC%25C7%25D1%25BF%25C1%25B8%25B6%25C0%25BB_1.jpg%3Ftype%3Dm500_500&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20150901_282%2F1441052871948azVlg_JPEG%2F116976516275300_0.jpg&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_148%2F139685579507146AXK_JPEG%2F%25BC%25AD%25BF%25EF_%25C3%25A2%25B4%25F6%25B1%25C3_10.JPG%3Ftype%3Dm500_500&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_148%2F1396853969940TYVXr_JPEG%2F%25BC%25AD%25BF%25EF_%25B7%25D4%25B5%25A5%25BF%25F9%25B5%25E5_1.jpg%3Ftype%3Dm500_500&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzEyMjhfNTkg%2FMDAxNTE0NDcwODE3NzU4.NmxWFDvjDDxl4FYWNXavS2SD5VsDfMWxqwgxUfG3IFEg.53l6qE0hi2KJxxrKyTgiKdez072GJdKqmMrKsJvfuE8g.JPEG.rnldya12%2FIMG_0701.jpg%23900x675&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_228%2F1396856087323eAktJ_JPEG%2F%25BC%25AD%25BF%25EF_%25B3%25B2%25BB%25EA%25C7%25D1%25BF%25C1%25B8%25B6%25C0%25BB_1.jpg%3Ftype%3Dm500_500&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20170526_171%2F1495772011947hzUIv_JPEG%2FDDP1_%25281%2529.jpg&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20190318_76%2F15528866197845Mqbi_JPEG%2FEoTAmY7lv_VEqh0j5cl1Zfi1.jpg&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20150831_208%2F1441015652359wLYkJ_JPEG%2F156675583839830_0.jpg&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_294%2F1396853911660oX1mT_JPEG%2F%25BC%25AD%25BF%25EF_%25C4%25DA%25BF%25A2%25BD%25BA_1.jpg%3Ftype%3Dm500_500&type=f&size=86x86"
		);
		return img;
	}
	
	public List<Tourizm> makeTourizm() {
		Tourizm tourizm = null;
		List<Tourizm> tourizmlist = new ArrayList<>();
		for(int i = 0; i<writePLACE().size(); i++) {
			tourizm = new Tourizm(writePLACE().get(i), writeSPOT().get(i), writeTOURIZMINFO().get(i), writeHEARTCOUNT().toString(), writeIMG().get(i));
			tourizmlist.add(tourizm);
		}
		return tourizmlist;
	}
	
	
	@Transactional
	public void insertTourizm() {
		List<Tourizm> tourizmList = makeTourizm();
		for(int i = 0; i < tourizmList.size(); i++) {
			tourizmMapper.insertTourizm(tourizmList.get(i));
		}
	}

}
