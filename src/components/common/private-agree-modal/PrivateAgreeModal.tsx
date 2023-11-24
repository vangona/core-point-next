import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import type { ModalProps } from '@mui/material';

const TITLE_HEIGHT = '100px';
const FOOTER_HEIGHT = '50px';

type PrivateAgreeModalProps = Omit<ModalProps, 'children'> & {
  handleAgreeClick?: () => void;
};
const PrivateAgreeModal = (props: PrivateAgreeModalProps) => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  const handleAgreeClick = (event: React.MouseEvent) => {
    props.handleAgreeClick?.();
    props.onClose?.(event, 'backdropClick');
  };

  return (
    <Modal {...props}>
      <Paper
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: isDownMedium ? '95vw' : '80vw',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          px: isDownMedium ? 2 : 5,
          whiteSpace: 'pre-wrap',
          overflow: 'auto',
          transform: 'translate(-50%, -50%)',
        }}
        variant='elevation'
      >
        <Typography
          variant='h6'
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: TITLE_HEIGHT,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          개인정보 처리방침
        </Typography>
        <Typography
          sx={{
            mt: TITLE_HEIGHT,
            maxHeight: `calc(80vh - ${TITLE_HEIGHT} - ${FOOTER_HEIGHT} - 20px)`,
            overflow: 'auto',
          }}
        >
          {`'코어창업'에서 제공하는 서비스('우리 회사 사이트')는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 
이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.


개인정보의 처리 및 보유기간

코어창업은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

수집방법   수집항목   보유사유   이용기간

휴대폰번호, 이름, 문의내용 


카테고리 항목

OOOO 신청   이름, 휴대폰번호, 문의내용   문의 회신   정보 수집일로부터 3년

OOOO 문의   이름, 휴대폰번호, 문의내용   문의 회신   정보 수집일로부터 3년

OOOO 제안            이름, 휴대폰번호, 문의내용   문의 회신   정보 수집일로부터 3년

OOOO 문의   이름, 휴대폰번호, 문의내용   문의 회신   정보 수집일로부터 3년


자동 수집 정보   IP 주소, 서비스 이용 시각, 접속한 브라우저 정보 (User Agent)   웹 방문에 관한 통계와 분석 자료 활용, 어뷰징 유저 확인 정보 수집일로부터 2년

① 처리하고 있는 개인정보는 상기의 목적 이외의 용도로는 이용되지 않으며, 처리 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

② 코어창업은 법령에 따른 개인정보 보유∙이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유∙이용기간 내에서 개인정보를 처리∙보유합니다. 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료시까지 처리∙보유합니다. 
- 관계 법령 위반에 따른 수사∙조사 등이 진행 중인 경우에는 해당 수사∙조사 종료 시까지



개인정보의 파기

① 코어창업은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.

② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.

③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.


코어창업은 파기 사유가 발생한 개인정보를 선정하고, 코어창업의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.

개인정보가 기록된 출력물, 서면 등은 파쇄 또는 소각의 방법으로 파기하고, 전자적 파일형태의 개인정보는 복원이 불가능한 방법으로 영구 삭제하는 방법으로 파기



정보주체의 권리·의무 및 행사방법

① 정보주체는 코어창업에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.

② 제1항에 따른 권리 행사는 코어창업에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편 등을 통하여 하실 수 있으며 코어창업은 이에 대해 지체 없이 조치하겠습니다.

③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.

④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.

⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.

⑥ 코어창업은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.




개인정보의 안전성 확보조치에 관한 사항 

코어창업은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.



1. 관리적 조치

내부관리계획 수립·시행, 전담조직 운영, 정기적 직원 교육

2. 기술적 조치

개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 개인정보의 암호화, 보안프로그램 설치 및 갱신

3. 물리적 조치

전산실, 자료보관실 등의 접근통제

개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항

① 코어창업은 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.

② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.

가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.

나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.

다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.




개인정보 보호책임자에 관한 사항

① 코어창업은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

② 정보주체는 코어창업의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의할 수 있습니다. 
  코어창업은 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.




▶ 개인정보 보호책임자

성명 : 조석훈

직책 : 대표

연락처 : 010 - 4537 - 5739 , corepoint0905@naver.com

※ 개인정보 보호 담당부서로 연결됩니다.





▶ 개인정보보호 담당부서

부서명 : 코어창업 관리부

연락처 : 010 - 4537 - 5739, corepoint0905@naver.com



개인정보 처리방침의 변경

① 현 개인정보 처리방침의 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 홈페이지를 통해 고지할 것입니다. 다만, 개인정보의 수집 및 활용, 제3자 제공 등과 같이 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다.

② 이 개인정보 처리방침은 OOOO년 OO월 OO일부터 적용됩니다.`}
        </Typography>
        <Button
          variant='text'
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: FOOTER_HEIGHT,
            zIndex: 9,
          }}
          onClick={handleAgreeClick}
        >
          내용을 모두 확인했으며, 내용에 동의합니다
        </Button>
      </Paper>
    </Modal>
  );
};

export default PrivateAgreeModal;
