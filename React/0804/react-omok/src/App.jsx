import { useState } from 'react'
import './App.css'

/**
 * 렌주룰 오목 게임 메인 컴포넌트
 * React의 useState 훅을 사용하여 게임 상태를 관리합니다.
 * 전통적인 오목은 바둑판처럼 교차선 위에 돌을 놓는 게임입니다.
 * 렌주룰 적용: 흑돌에게만 3-3, 4-4, 장목 금수가 적용됩니다.
 */
function App() {
  // 게임 보드 크기 설정 (15x15 교차점)
  const BOARD_SIZE = 15;
  
  // 게임 상태를 관리하는 state들
  // board: 2차원 배열로 게임 보드를 표현 (0: 빈칸, 1: 흑돌, 2: 백돌)
  const [board, setBoard] = useState(() => 
    Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(0))
  );
  
  // currentPlayer: 현재 플레이어 (1: 흑돌, 2: 백돌)
  const [currentPlayer, setCurrentPlayer] = useState(1);
  
  // winner: 게임 승자 (null: 게임 진행중, 1: 흑돌 승리, 2: 백돌 승리)
  const [winner, setWinner] = useState(null);
  
  // 금수 경고 메시지
  const [forbiddenMessage, setForbiddenMessage] = useState('');

  /**
   * 특정 방향으로 연속된 돌의 개수를 세는 함수
   * @param {Array} testBoard - 테스트할 보드 상태
   * @param {number} row - 시작 행
   * @param {number} col - 시작 열  
   * @param {number} dx - 방향 벡터 x
   * @param {number} dy - 방향 벡터 y
   * @param {number} player - 플레이어 번호
   * @returns {number} - 연속된 돌의 개수
   */
  const countInDirection = (testBoard, row, col, dx, dy, player) => {
    let count = 0;
    let r = row + dx;
    let c = col + dy;
    
    while (r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE && testBoard[r][c] === player) {
      count++;
      r += dx;
      c += dy;
    }
    
    return count;
  };

  /**
   * 특정 위치에 돌을 놓았을 때의 연속 길이를 계산하는 함수
   * @param {Array} testBoard - 테스트할 보드 상태
   * @param {number} row - 행 인덱스
   * @param {number} col - 열 인덱스
   * @param {number} player - 플레이어 번호
   * @param {number} dx - 방향 벡터 x
   * @param {number} dy - 방향 벡터 y
   * @returns {Object} - {count: 연속 개수, leftBlocked: 왼쪽 막힘, rightBlocked: 오른쪽 막힘}
   */
  const getLineInfo = (testBoard, row, col, player, dx, dy) => {
    const leftCount = countInDirection(testBoard, row, col, -dx, -dy, player);
    const rightCount = countInDirection(testBoard, row, col, dx, dy, player);
    const totalCount = leftCount + rightCount + 1; // 현재 위치 포함
    
    // 양쪽 끝이 막혀있는지 확인
    const leftR = row - dx * (leftCount + 1);
    const leftC = col - dy * (leftCount + 1);
    const rightR = row + dx * (rightCount + 1);
    const rightC = col + dy * (rightCount + 1);
    
    const leftBlocked = leftR < 0 || leftR >= BOARD_SIZE || leftC < 0 || leftC >= BOARD_SIZE || 
                       testBoard[leftR][leftC] === (player === 1 ? 2 : 1);
    const rightBlocked = rightR < 0 || rightR >= BOARD_SIZE || rightC < 0 || rightC >= BOARD_SIZE || 
                        testBoard[rightR][rightC] === (player === 1 ? 2 : 1);
    
    return { count: totalCount, leftBlocked, rightBlocked };
  };

  /**
   * 특정 방향에서 활삼(양쪽이 열린 3목)을 찾는 함수
   * @param {Array} testBoard - 테스트할 보드 상태
   * @param {number} row - 행 인덱스
   * @param {number} col - 열 인덱스  
   * @param {number} dx - 방향 벡터 x
   * @param {number} dy - 방향 벡터 y
   * @param {number} player - 플레이어 번호
   * @returns {boolean} - 해당 방향에 활삼이 있으면 true
   */
  const hasOpenThreeInDirection = (testBoard, row, col, dx, dy, player) => {
    // 현재 위치를 포함한 해당 방향의 연속된 돌 개수 확인
    const leftCount = countInDirection(testBoard, row, col, -dx, -dy, player);
    const rightCount = countInDirection(testBoard, row, col, dx, dy, player);
    const totalCount = leftCount + rightCount + 1;
    
    // 정확히 3개이고 양쪽이 열려있는지 확인
    if (totalCount === 3) {
      const leftR = row - dx * (leftCount + 1);
      const leftC = col - dy * (leftCount + 1);
      const rightR = row + dx * (rightCount + 1);
      const rightC = col + dy * (rightCount + 1);
      
      const leftOpen = leftR >= 0 && leftR < BOARD_SIZE && leftC >= 0 && leftC < BOARD_SIZE && 
                      testBoard[leftR][leftC] === 0;
      const rightOpen = rightR >= 0 && rightR < BOARD_SIZE && rightC >= 0 && rightC < BOARD_SIZE && 
                       testBoard[rightR][rightC] === 0;
      
      return leftOpen && rightOpen;
    }
    
    return false;
  };

  /**
   * 3-3 금수를 체크하는 함수 (더욱 개선된 버전)
   * @param {Array} testBoard - 테스트할 보드 상태
   * @param {number} row - 행 인덱스
   * @param {number} col - 열 인덱스
   * @param {number} player - 플레이어 번호 (흑돌만 적용)
   * @returns {boolean} - 3-3 금수면 true
   */
  const checkThreeThree = (testBoard, row, col, player) => {
    if (player !== 1) return false; // 흑돌에게만 적용
    
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
    let openThreeCount = 0;
    
    for (let [dx, dy] of directions) {
      if (hasOpenThreeInDirection(testBoard, row, col, dx, dy, player)) {
        openThreeCount++;
      }
    }
    
    return openThreeCount >= 2;
  };

  /**
   * 4-4 금수를 체크하는 함수
   * @param {Array} testBoard - 테스트할 보드 상태
   * @param {number} row - 행 인덱스
   * @param {number} col - 열 인덱스
   * @param {number} player - 플레이어 번호 (흑돌만 적용)
   * @returns {boolean} - 4-4 금수면 true
   */
  const checkFourFour = (testBoard, row, col, player) => {
    if (player !== 1) return false; // 흑돌에게만 적용
    
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
    let fourCount = 0;
    
    for (let [dx, dy] of directions) {
      const lineInfo = getLineInfo(testBoard, row, col, player, dx, dy);
      
      // 사 조건: 4개 연속
      if (lineInfo.count === 4) {
        fourCount++;
      }
    }
    
    return fourCount >= 2;
  };

  /**
   * 장목 금수를 체크하는 함수 (6개 이상)
   * @param {Array} testBoard - 테스트할 보드 상태
   * @param {number} row - 행 인덱스
   * @param {number} col - 열 인덱스
   * @param {number} player - 플레이어 번호 (흑돌만 적용)
   * @returns {boolean} - 장목 금수면 true
   */
  const checkOverline = (testBoard, row, col, player) => {
    if (player !== 1) return false; // 흑돌에게만 적용
    
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
    
    for (let [dx, dy] of directions) {
      const lineInfo = getLineInfo(testBoard, row, col, player, dx, dy);
      
      // 6개 이상 연속이면 장목
      if (lineInfo.count >= 6) {
        return true;
      }
    }
    
    return false;
  };

  /**
   * 렌주룰 금수를 종합적으로 체크하는 함수
   * @param {Array} testBoard - 테스트할 보드 상태
   * @param {number} row - 행 인덱스
   * @param {number} col - 열 인덱스
   * @param {number} player - 플레이어 번호
   * @returns {Object} - {isForbidden: boolean, message: string}
   */
  const checkForbiddenMove = (testBoard, row, col, player) => {
    if (player !== 1) return { isForbidden: false, message: '' }; // 백돌은 금수 없음
    
    if (checkThreeThree(testBoard, row, col, player)) {
      return { isForbidden: true, message: '3-3 금수입니다! (두 개의 활삼이 동시에 만들어집니다)' };
    }
    
    if (checkFourFour(testBoard, row, col, player)) {
      return { isForbidden: true, message: '4-4 금수입니다! (두 개의 사가 동시에 만들어집니다)' };
    }
    
    if (checkOverline(testBoard, row, col, player)) {
      return { isForbidden: true, message: '장목(6목 이상) 금수입니다!' };
    }
    
    return { isForbidden: false, message: '' };
  };

  /**
   * 특정 위치에서 5개의 돌이 연속으로 놓여있는지 확인하는 함수
   * @param {Array} testBoard - 테스트할 보드 상태
   * @param {number} row - 행 인덱스
   * @param {number} col - 열 인덱스
   * @param {number} player - 플레이어 번호 (1 또는 2)
   * @returns {boolean} - 승리 조건을 만족하면 true
   */
  const checkWin = (testBoard, row, col, player) => {
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];

    for (let [dx, dy] of directions) {
      const lineInfo = getLineInfo(testBoard, row, col, player, dx, dy);
      
      // 정확히 5개 연속이면 승리 (6개 이상은 흑돌에게 장목 금수)
      if (lineInfo.count === 5) {
        return true;
      }
    }

    return false;
  };

  /**
   * 보드의 특정 위치를 클릭했을 때 실행되는 함수
   * @param {number} row - 클릭한 행 인덱스
   * @param {number} col - 클릭한 열 인덱스
   */
  const handleCellClick = (row, col) => {
    // 게임이 끝났거나 이미 돌이 놓여있으면 무시
    if (winner || board[row][col] !== 0) {
      return;
    }

    // 새로운 보드 상태 생성 (불변성 유지)
    const newBoard = board.map((boardRow, rowIndex) =>
      boardRow.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? currentPlayer : cell
      )
    );

    // 렌주룰 금수 체크
    const forbiddenCheck = checkForbiddenMove(newBoard, row, col, currentPlayer);
    
    if (forbiddenCheck.isForbidden) {
      setForbiddenMessage(forbiddenCheck.message);
      // 3초 후 메시지 제거
      setTimeout(() => setForbiddenMessage(''), 3000);
      return;
    }

    // 금수 메시지 제거
    setForbiddenMessage('');

    // 보드 상태 업데이트
    setBoard(newBoard);

    // 승리 조건 체크
    if (checkWin(newBoard, row, col, currentPlayer)) {
      setWinner(currentPlayer);
    } else {
      // 플레이어 교체 (1 ↔ 2)
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  /**
   * 게임을 초기화하는 함수
   */
  const resetGame = () => {
    setBoard(Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(0)));
    setCurrentPlayer(1);
    setWinner(null);
    setForbiddenMessage('');
  };

  /**
   * 보드의 각 셀을 렌더링하는 함수
   */
  const renderCell = (row, col) => {
    const cellValue = board[row][col];
    let cellClass = 'cell';
    
    if (cellValue === 1) {
      cellClass += ' black';
    } else if (cellValue === 2) {
      cellClass += ' white';
    }

    return (
      <div
        key={`${row}-${col}`}
        className={cellClass}
        onClick={() => handleCellClick(row, col)}
      >
        {cellValue !== 0 && <div className="stone" />}
      </div>
    );
  };

  return (
    <div className="app">
      <h1>렌주룰 오목 게임 (Renju Omok)</h1>
      
      {/* 게임 상태 표시 */}
      <div className="game-info">
        {winner ? (
          <h2>{winner === 1 ? '흑돌' : '백돌'} 승리!</h2>
        ) : (
          <h2>현재 플레이어: {currentPlayer === 1 ? '흑돌' : '백돌'}</h2>
        )}
        
        {/* 금수 경고 메시지 */}
        {forbiddenMessage && (
          <div className="forbidden-message">
            ⚠️ {forbiddenMessage}
          </div>
        )}
      </div>

      {/* 게임 보드 */}
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
          </div>
        ))}
      </div>

      {/* 게임 재시작 버튼 */}
      <button className="reset-button" onClick={resetGame}>
        게임 다시 시작
      </button>

      {/* 렌주룰 설명 */}
      <div className="rules">
        <h3>렌주룰 (Renju Rules):</h3>
        <ul>
          <li>두 명의 플레이어가 번갈아가며 교차선 위에 돌을 놓습니다.</li>
          <li>먼저 정확히 5개의 돌을 연속으로 놓는 플레이어가 승리합니다.</li>
          <li><strong>흑돌(선공)에게만 적용되는 금수:</strong></li>
          <li>• <strong>3-3 금수:</strong> 동시에 두 개 이상의 활삼을 만드는 수</li>
          <li>• <strong>4-4 금수:</strong> 동시에 두 개 이상의 사를 만드는 수</li>
          <li>• <strong>장목 금수:</strong> 6개 이상 연속으로 놓는 수</li>
          <li>백돌에게는 금수가 적용되지 않습니다.</li>
        </ul>
      </div>
    </div>
  );
}

export default App
